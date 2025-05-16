// src/firebase/firebase.service.ts
import { Injectable, Inject } from '@nestjs/common';
import type { Storage } from 'firebase-admin/storage';
import { FileUpload } from 'src/upload/upload.types';

@Injectable()
export class FirebaseService {
  private bucket; // TypeScript infère le type automatiquement

  constructor(@Inject('FIREBASE_STORAGE') private readonly storage: Storage) {
    this.bucket = this.storage.bucket();
  }

  async uploadFile(
    filePromise: Promise<FileUpload>,
    destination: string,
  ): Promise<string> {
    const { createReadStream, filename, mimetype } = await filePromise;
    const timestamp = Date.now();
    const filePath = `${destination}/${timestamp}-${filename}`;
    const fileRef = this.bucket.file(filePath);

    await new Promise<void>((resolve, reject) => {
      createReadStream()
        .pipe(
          fileRef.createWriteStream({
            metadata: { contentType: mimetype },
            resumable: false,
          }),
        )
        .on('error', reject)
        .on('finish', resolve);
    });

    await fileRef.makePublic();
    return `https://storage.googleapis.com/${this.bucket.name}/${filePath}`;
  }
}
