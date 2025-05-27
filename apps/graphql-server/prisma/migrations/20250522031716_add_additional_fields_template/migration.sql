-- AlterTable
ALTER TABLE `Template` ADD COLUMN `isDeleted` BOOLEAN NULL,
    ADD COLUMN `isDraft` BOOLEAN NULL,
    ADD COLUMN `isGlobal` BOOLEAN NULL,
    ADD COLUMN `isPublished` BOOLEAN NULL;
