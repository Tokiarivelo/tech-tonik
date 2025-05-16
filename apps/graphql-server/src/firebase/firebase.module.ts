import { Module, Global } from '@nestjs/common';
import { initializeApp, cert, App as FirebaseApp } from 'firebase-admin/app';
import { getStorage, Storage } from 'firebase-admin/storage';
import { FirebaseService } from './firebase.service';
import { join } from 'path';
import serviceAccount from './service-account.json'; // Adjust the path as necessary

@Global()
@Module({
  providers: [
    {
      provide: 'FIREBASE_APP',
      useFactory: () => {
        const app: FirebaseApp = initializeApp({
          credential: cert(serviceAccount),
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        });
        return app;
      },
    },
    {
      provide: 'FIREBASE_STORAGE',
      useFactory: (app: FirebaseApp) => {
        return getStorage(app);
      },
      inject: ['FIREBASE_APP'],
    },
    FirebaseService,
  ],
  exports: [FirebaseService],
})
export class FirebaseModule {}
