-- Active: 1670843044531@@127.0.0.1@3306@test
CREATE TABLE
    mahasiswaItera(
        nim int(12) NOT NULL AUTO_INCREMENT,
        nama char(23) NOT NULL,
        prodi varchar(23) NOT NULL,
        primary key (nim)
    )engine = innoDB;

ALTER TABLE mahasiswaItera AUTO_INCREMENT=100;

INSERT INTO mahasiswaItera (nim, nama, prodi) VALUES
        (121140195, 'Marchel Ferry Timoteus S', 'Teknik Informatika'),
        (121140196, 'Adriel Sinuhaji', 'Teknik Informatika'),
        (121140009, 'FAUZAN', 'Teknik Informatika'), 
        (121140012, 'RIVALDI YONATHAN NAINGGOLAN', 'Teknik Informatika'),
        (121140046, 'Muhammad Ridho Sandi Kurniawan', 'Teknik Informatika'),
        (121140047, 'ANNISA CHECILIA', 'Teknik Informatika'),
        (121140034, 'ABDI MASKUR MUTAQIN', 'Teknik Informatika'),
        (121360009, 'Abi Farhan', 'Teknik Material'),
        (121160041, 'G. BINTANG ANDROMEDA', 'Teknik Industri');
