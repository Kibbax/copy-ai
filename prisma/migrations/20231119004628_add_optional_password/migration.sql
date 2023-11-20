/*
  Warnings:

  - You are about to drop the column `accessToken` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "accessToken",
ALTER COLUMN "password" DROP NOT NULL;
