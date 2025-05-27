/*
  Warnings:

  - A unique constraint covering the columns `[uniqueKey,authorId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uniqueKey` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Template` ADD COLUMN `authorId` VARCHAR(191) NULL,
    ADD COLUMN `uniqueKey` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Template_uniqueKey_authorId_key` ON `Template`(`uniqueKey`, `authorId`);

-- AddForeignKey
ALTER TABLE `Template` ADD CONSTRAINT `Template_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
