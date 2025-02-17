/*
  Warnings:

  - You are about to drop the `frete` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `carga` DROP FOREIGN KEY `carga_ibfk_1`;

-- DropForeignKey
ALTER TABLE `frete` DROP FOREIGN KEY `frete_ibfk_1`;

-- DropForeignKey
ALTER TABLE `frete` DROP FOREIGN KEY `frete_ibfk_2`;

-- DropForeignKey
ALTER TABLE `pagamento` DROP FOREIGN KEY `pagamento_ibfk_2`;

-- DropTable
DROP TABLE `frete`;
