import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import type { Bucket } from '@google-cloud/storage';
import * as serviceAccount from '../../service-account.json';

@Injectable()
export class FirebaseService {
  private bucket: Bucket;

  constructor() {
    // Initialiser Firebase Admin avec les identifiants de votre projet
    // Vous pouvez également utiliser une variable d'environnement pour stocker vos identifiants
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      storageBucket: 'tech-tonik.firebasestorage.app',
    });

    this.bucket = admin.storage().bucket();
  }

  async uploadFile(file: Express.Multer.File, path: string): Promise<string> {
    const fileBuffer = file.buffer;
    const fileName = `${path}/${Date.now()}-${file.originalname}`;
    const fileUpload = this.bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (error) => {
        reject(
          new Error(error instanceof Error ? error.message : String(error)),
        );
      });

      blobStream.on('finish', () => {
        // Rendre le fichier public
        fileUpload
          .makePublic()
          .then(() => {
            // Obtenir l'URL publique
            const publicUrl = `https://storage.googleapis.com/${this.bucket.name}/${fileUpload.name}`;
            resolve(publicUrl);
          })
          .catch((error) => {
            reject(
              new Error(error instanceof Error ? error.message : String(error)),
            );
          });
      });

      blobStream.end(fileBuffer);
    });
  }
}
