import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert data into 'tipo' table
  await prisma.tipo.createMany({
    data: [
      { id_tipo: 1, nome_tipo: 'Caminhão', capacidade_peso: 12000.00, quantidade_eixos: 2 },
      { id_tipo: 2, nome_tipo: 'Carreta', capacidade_peso: 25000.00, quantidade_eixos: 4 },
      { id_tipo: 3, nome_tipo: 'VUC', capacidade_peso: 3000.00, quantidade_eixos: 1 },
      { id_tipo: 4, nome_tipo: 'Bitrem', capacidade_peso: 45000.00, quantidade_eixos: 7 },
      { id_tipo: 5, nome_tipo: 'Rodotrem', capacidade_peso: 60000.00, quantidade_eixos: 9 },
      { id_tipo: 6, nome_tipo: 'Truck', capacidade_peso: 14000.00, quantidade_eixos: 2 },
      { id_tipo: 7, nome_tipo: 'Furgão', capacidade_peso: 5000.00, quantidade_eixos: 2 },
      { id_tipo: 8, nome_tipo: 'Toco', capacidade_peso: 8000.00, quantidade_eixos: 2 },
      { id_tipo: 9, nome_tipo: 'Cavalo Mecânico', capacidade_peso: 20000.00, quantidade_eixos: 2 },
      { id_tipo: 10, nome_tipo: 'Utilitário', capacidade_peso: 1500.00, quantidade_eixos: 1 },
      { id_tipo: 11, nome_tipo: 'Van', capacidade_peso: 2000.00, quantidade_eixos: 2 }
    ]
  });

  // Insert data into 'veiculo' table
  await prisma.veiculo.createMany({
    data: [
      { renavam: '00123456789', id_tipo: 1, placa: 'ABC1234', marca: 'Mercedes-Benz', modelo: 'Atego', cor: 'Branco', ano: 2020, rntrc: '12345678' },
      { renavam: '00234567890', id_tipo: 2, placa: 'DEF5678', marca: 'Volvo', modelo: 'FH', cor: 'Vermelho', ano: 2019, rntrc: '23456789' },
      { renavam: '00345678901', id_tipo: 3, placa: 'GHI9101', marca: 'VW', modelo: 'Delivery', cor: 'Azul', ano: 2021, rntrc: '34567890' },
      { renavam: '00456789012', id_tipo: 4, placa: 'JKL1123', marca: 'Scania', modelo: 'R450', cor: 'Preto', ano: 2018, rntrc: '45678901' },
      { renavam: '00567890123', id_tipo: 5, placa: 'MNO3456', marca: 'Iveco', modelo: 'Hi-Way', cor: 'Prata', ano: 2017, rntrc: '56789012' },
      { renavam: '00678901234', id_tipo: 6, placa: 'PQR6789', marca: 'DAF', modelo: 'XF', cor: 'Verde', ano: 2022, rntrc: '67890123' },
      { renavam: '00789012345', id_tipo: 7, placa: 'STU9012', marca: 'Ford', modelo: 'Cargo', cor: 'Amarelo', ano: 2016, rntrc: '78901234' },
      { renavam: '00890123456', id_tipo: 8, placa: 'VWX3456', marca: 'Mercedes-Benz', modelo: 'Accelo', cor: 'Laranja', ano: 2015, rntrc: '89012345' },
      { renavam: '00901234567', id_tipo: 9, placa: 'YZA6789', marca: 'MAN', modelo: 'TGX', cor: 'Branco', ano: 2023, rntrc: '90123456' },
      { renavam: '01012345678', id_tipo: 10, placa: 'BCD9012', marca: 'Renault', modelo: 'Kangoo', cor: 'Cinza', ano: 2014, rntrc: '01234567' },
      { renavam: '01123456789', id_tipo: 11, placa: 'EFG3456', marca: 'Peugeot', modelo: 'Boxer', cor: 'Azul', ano: 2023, rntrc: '12345001' }
    ]
  });

  // Insert data into 'motorista' table
  await prisma.motorista.createMany({
    data: [
      { cpf_motorista: '10583656064', registro_cnh: '81021445800', nome: 'João Silva', telefone: '11999999999', endereco: 'Rua A, 123', data_admissao: new Date('2020-01-01') },
      { cpf_motorista: '79044202014', registro_cnh: '96582237996', nome: 'Maria Oliveira', telefone: '11888888888', endereco: 'Rua B, 456', data_admissao: new Date('2019-02-02') },
      { cpf_motorista: '53795876079', registro_cnh: '39068060831', nome: 'Carlos Souza', telefone: '11777777777', endereco: 'Rua C, 789', data_admissao: new Date('2018-03-03') },
      { cpf_motorista: '28030858019', registro_cnh: '72106520217', nome: 'Ana Lima', telefone: '11666666666', endereco: 'Rua D, 101', data_admissao: new Date('2021-04-04') },
      { cpf_motorista: '20877435090', registro_cnh: '43959233782', nome: 'Pedro Santos', telefone: '11555555555', endereco: 'Rua E, 202', data_admissao: new Date('2022-05-05') },
      { cpf_motorista: '70917600002', registro_cnh: '65999975043', nome: 'Paulo Costa', telefone: '11444444444', endereco: 'Rua F, 303', data_admissao: new Date('2023-06-06') },
      { cpf_motorista: '34106049015', registro_cnh: '14585116580', nome: 'Lucas Pereira', telefone: '11333333333', endereco: 'Rua G, 404', data_admissao: new Date('2020-07-07') },
      { cpf_motorista: '26028545066', registro_cnh: '82857685368', nome: 'Fernanda Almeida', telefone: '11222222222', endereco: 'Rua H, 505', data_admissao: new Date('2019-08-08') },
      { cpf_motorista: '06551635067', registro_cnh: '50570721485', nome: 'Rafael Rodrigues', telefone: '11111111111', endereco: 'Rua I, 606', data_admissao: new Date('2018-09-09') },
      { cpf_motorista: '07168911074', registro_cnh: '56124107738', nome: 'Juliana Ferreira', telefone: '11900000000', endereco: 'Rua J, 707', data_admissao: new Date('2021-10-10') },
      { cpf_motorista: '82865234070', registro_cnh: '48491811379', nome: 'Sérgio Carvalho', telefone: '11888800000', endereco: 'Rua K, 808', data_admissao: new Date('2022-11-11') }
    ]
  });

  await prisma.cartao.createMany({
    data: [
      { numero_conta: '123456', cpf_motorista: '10583656064', agencia: '001', validade: new Date('2025-01-01') },
      { numero_conta: '234567', cpf_motorista: '79044202014', agencia: '002', validade: new Date('2025-02-02') },
      { numero_conta: '345678', cpf_motorista: '53795876079', agencia: '003', validade: new Date('2025-03-03') },
      { numero_conta: '456789', cpf_motorista: '28030858019', agencia: '004', validade: new Date('2025-04-04') },
      { numero_conta: '567890', cpf_motorista: '20877435090', agencia: '005', validade: new Date('2025-05-05') },
      { numero_conta: '678901', cpf_motorista: '70917600002', agencia: '006', validade: new Date('2025-06-06') },
      { numero_conta: '789012', cpf_motorista: '34106049015', agencia: '007', validade: new Date('2025-07-07') },
      { numero_conta: '890123', cpf_motorista: '26028545066', agencia: '008', validade: new Date('2025-08-08') },
      { numero_conta: '901234', cpf_motorista: '06551635067', agencia: '009', validade: new Date('2025-09-09') },
      { numero_conta: '012345', cpf_motorista: '07168911074', agencia: '010', validade: new Date('2025-10-10') },
      { numero_conta: '112233', cpf_motorista: '82865234070', agencia: '011', validade: new Date('2025-11-11') },
    ],
  });

}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
