#!/usr/bin/env bash
set -euo pipefail

# Variables de connexion SSH
SSH_USER="techtonik"
SSH_HOST="techtonik.madagascar.webcup.hodi.host"
SSH_PORT=22974
REMOTE_FRONT_DIR="./front-end"
REMOTE_BACK_DIR="./back-end"

echo "🟢 Déploiement du front-end"
pushd apps/web > /dev/null
  
  echo "🔨 Build Front"
  pnpm run build

  echo "⛔️ Suppresion de tous les fichiers du front sur le serveur"
  ssh -p ${SSH_PORT} ${SSH_USER}@${SSH_HOST} \
    "rm -rf ${REMOTE_FRONT_DIR}/* && rm -rf ${REMOTE_BACK_DIR}/*"

  echo "📦 Copie Front sur le serveur"
  scp -P ${SSH_PORT} -r passenger.js package.json public .next pnpm-lock.yaml ${SSH_USER}@${SSH_HOST}:${REMOTE_FRONT_DIR}

  echo "📥 Installation des dépendances à distance (Front)"
  ssh -p ${SSH_PORT} ${SSH_USER}@${SSH_HOST} \
    "cd ${REMOTE_FRONT_DIR} && pnpm install "

  echo "📦 Copie Back sur le serveur"
  scp -P ${SSH_PORT} -r passenger.js package.json pnpm-lock.yaml dist/src/*  ${SSH_USER}@${SSH_HOST}:${REMOTE_FRONT_DIR}

  echo "📥 Installation des dépendances à distance (Back)"
  ssh -p ${SSH_PORT} ${SSH_USER}@${SSH_HOST} \
    "cd ${REMOTE_BACK_DIR} && pnpm install "

popd > /dev/null

echo "🟢 Déploiement du back-end"
pushd apps/graphql-server > /dev/null

  echo "🔨 Build Back"
  pnpm run build


  echo "📦 Copie Back sur le serveur"
  scp -P ${SSH_PORT} package.json pnpm-lock.yaml ${SSH_USER}@${SSH_HOST}:${REMOTE_BACK_DIR}
  scp -P ${SSH_PORT} -r dist/src ${SSH_USER}@${SSH_HOST}:${REMOTE_BACK_DIR}
  scp -P ${SSH_PORT} -r prisma ${SSH_USER}@${SSH_HOST}:${REMOTE_BACK_DIR}
  pnpm prisma:generate

popd > /dev/null

echo "✅ Déploiement terminé !"
