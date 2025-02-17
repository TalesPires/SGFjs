-- DropForeignKey
ALTER TABLE `frete` DROP FOREIGN KEY `frete_ibfk_2`;

-- AddForeignKey
ALTER TABLE `frete` ADD CONSTRAINT `frete_ibfk_2` FOREIGN KEY (`renavam`) REFERENCES `veiculo`(`renavam`) ON DELETE CASCADE ON UPDATE NO ACTION;
