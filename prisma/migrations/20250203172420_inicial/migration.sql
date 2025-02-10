-- CreateTable
CREATE TABLE `acessa` (
    `cpf_fiscal` VARCHAR(11) NOT NULL,
    `id_tipo` SMALLINT UNSIGNED NOT NULL,
    `data_alteracao` DATETIME(0) NOT NULL,
    `valor_km` DECIMAL(7, 2) NULL,
    `valor_tonelada` DECIMAL(7, 2) NULL,
    `valor_entrega` DECIMAL(10, 2) NULL,

    INDEX `cpf_fiscal`(`cpf_fiscal`),
    PRIMARY KEY (`id_tipo`, `cpf_fiscal`, `data_alteracao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carga` (
    `codigo_carga` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `id_frete` INTEGER UNSIGNED NULL,
    `peso` DECIMAL(7, 2) NULL,
    `valor_carga` DECIMAL(10, 2) NULL,

    INDEX `id_frete`(`id_frete`),
    PRIMARY KEY (`codigo_carga`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cartao` (
    `numero_conta` VARCHAR(6) NOT NULL,
    `cpf_motorista` VARCHAR(11) NULL,
    `agencia` VARCHAR(5) NULL,
    `validade` DATE NULL,

    INDEX `cpf_motorista`(`cpf_motorista`),
    PRIMARY KEY (`numero_conta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entrega` (
    `id_entrega` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `codigo_carga` INTEGER UNSIGNED NULL,
    `cidade` VARCHAR(30) NULL,
    `valor_entrega` DECIMAL(10, 2) NULL,
    `peso_entrega` DECIMAL(7, 2) NULL,
    `dificuldade` BOOLEAN NULL,
    `cliente` VARCHAR(30) NULL,

    INDEX `codigo_carga`(`codigo_carga`),
    PRIMARY KEY (`id_entrega`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entrega_distribuidora` (
    `id_entrega` INTEGER UNSIGNED NOT NULL,
    `distribuidora` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id_entrega`, `distribuidora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fiscal` (
    `cpf_fiscal` VARCHAR(11) NOT NULL,
    `nome_usuario` VARCHAR(50) NULL,
    `email` VARCHAR(55) NULL,
    `ativo` BOOLEAN NULL DEFAULT true,
    `staff` BOOLEAN NULL DEFAULT false,
    `password` VARCHAR(255) NULL,
    `last_login` DATETIME(0) NULL,

    UNIQUE INDEX `nome_usuario_UNIQUE`(`nome_usuario`),
    PRIMARY KEY (`cpf_fiscal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `frete` (
    `id_frete` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cpf_motorista` VARCHAR(11) NULL,
    `renavam` VARCHAR(11) NULL,
    `data_chegada` DATETIME(0) NULL,
    `data_saida` DATETIME(0) NULL,
    `distancia_rodagem` SMALLINT NULL,
    `valor_frete` DECIMAL(10, 2) NULL,

    INDEX `cpf_motorista`(`cpf_motorista`),
    INDEX `renavam`(`renavam`),
    PRIMARY KEY (`id_frete`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `cpf_motorista` VARCHAR(11) NOT NULL,
    `registro_cnh` VARCHAR(11) NULL,
    `nome` VARCHAR(50) NULL,
    `telefone` VARCHAR(11) NULL,
    `endereco` VARCHAR(50) NULL,
    `data_admissao` DATE NULL,

    UNIQUE INDEX `cpf_motorista_UNIQUE`(`cpf_motorista`),
    PRIMARY KEY (`cpf_motorista`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pagamento` (
    `id_pagamento` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `cpf_fiscal` VARCHAR(11) NOT NULL,
    `id_frete` INTEGER UNSIGNED NOT NULL,
    `taxa_desconto` DECIMAL(6, 2) NULL,
    `taxa_acrescimo` DECIMAL(6, 2) NULL,
    `data_pagamento` DATETIME(0) NULL,
    `status_pagamento` ENUM('PE', 'TR', 'PA') NULL,
    `valor_calculado` DECIMAL(10, 2) NULL,

    INDEX `pagamento_ibfk_1`(`cpf_fiscal`),
    INDEX `pagamento_ibfk_2`(`id_frete`),
    PRIMARY KEY (`id_pagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo` (
    `id_tipo` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `nome_tipo` VARCHAR(20) NULL,
    `capacidade_peso` DECIMAL(7, 2) NULL,
    `quantidade_eixos` SMALLINT UNSIGNED NULL,

    PRIMARY KEY (`id_tipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `veiculo` (
    `renavam` VARCHAR(11) NOT NULL,
    `id_tipo` SMALLINT UNSIGNED NULL,
    `placa` VARCHAR(20) NULL,
    `marca` VARCHAR(20) NULL,
    `modelo` VARCHAR(20) NULL,
    `cor` VARCHAR(20) NULL,
    `ano` YEAR NULL,
    `rntrc` VARCHAR(8) NULL,

    INDEX `id_tipo`(`id_tipo`),
    PRIMARY KEY (`renavam`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `acessa` ADD CONSTRAINT `acessa_ibfk_1` FOREIGN KEY (`cpf_fiscal`) REFERENCES `fiscal`(`cpf_fiscal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `acessa` ADD CONSTRAINT `acessa_ibfk_2` FOREIGN KEY (`id_tipo`) REFERENCES `tipo`(`id_tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carga` ADD CONSTRAINT `carga_ibfk_1` FOREIGN KEY (`id_frete`) REFERENCES `frete`(`id_frete`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cartao` ADD CONSTRAINT `cartao_ibfk_1` FOREIGN KEY (`cpf_motorista`) REFERENCES `motorista`(`cpf_motorista`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `entrega` ADD CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`codigo_carga`) REFERENCES `carga`(`codigo_carga`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `entrega_distribuidora` ADD CONSTRAINT `entrega_distribuidora_ibfk_1` FOREIGN KEY (`id_entrega`) REFERENCES `entrega`(`id_entrega`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `frete` ADD CONSTRAINT `frete_ibfk_1` FOREIGN KEY (`cpf_motorista`) REFERENCES `motorista`(`cpf_motorista`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `frete` ADD CONSTRAINT `frete_ibfk_2` FOREIGN KEY (`renavam`) REFERENCES `veiculo`(`renavam`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_ibfk_1` FOREIGN KEY (`cpf_fiscal`) REFERENCES `fiscal`(`cpf_fiscal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `pagamento` ADD CONSTRAINT `pagamento_ibfk_2` FOREIGN KEY (`id_frete`) REFERENCES `frete`(`id_frete`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `veiculo` ADD CONSTRAINT `veiculo_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipo`(`id_tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
