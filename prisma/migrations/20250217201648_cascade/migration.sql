-- DropForeignKey
ALTER TABLE `cartao` DROP FOREIGN KEY `cartao_ibfk_1`;

-- AddForeignKey
ALTER TABLE `cartao` ADD CONSTRAINT `cartao_ibfk_1` FOREIGN KEY (`cpf_motorista`) REFERENCES `motorista`(`cpf_motorista`) ON DELETE CASCADE ON UPDATE NO ACTION;
