import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationInit1694829212275 implements MigrationInterface {
    name = 'MigrationInit1694829212275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`charge\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(40) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_10e94f9460e7e74b0c356d40bc\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`typeservice\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_0526aa92c29f6c1b8f3d2c34c1\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`area\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_644ffaf8fbde4db798cb47712f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`typestaff\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_b0a9da460fa859a30f4ef32e91\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_cf461f5b40cf1a2b8876011e1e\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`staff_team\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`registrationDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`leader\` tinyint NOT NULL DEFAULT 1, \`id_staff\` varchar(36) NULL, \`id_team\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stage\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`state\` tinyint NOT NULL DEFAULT 1, \`id_project\` varchar(36) NULL, UNIQUE INDEX \`IDX_cbeb0a0f411c8b0879565811d0\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`requirement\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(100) NOT NULL, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`state\` tinyint NOT NULL DEFAULT 1, \`id_stage\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`statusActivity\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_9bdaf6008b0ad2bb57ee07c94e\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(100) NOT NULL, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`state\` tinyint NOT NULL DEFAULT 1, \`id_requirement\` varchar(36) NULL, \`id_staff\` varchar(36) NULL, \`id_statusactivity\` varchar(36) NULL, UNIQUE INDEX \`IDX_e0098522faf604f4f29ba54bba\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`typedocument\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`abbreviation\` varchar(12) NOT NULL, \`length\` int NOT NULL, \`person\` tinyint NOT NULL DEFAULT 0, \`company\` tinyint NOT NULL DEFAULT 0, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_6d342914feb4ba34d4f6eb9c8f\` (\`name\`), UNIQUE INDEX \`IDX_96d5b5afd3cbb93dfa3cdc29dc\` (\`abbreviation\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`staff\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`firstName\` varchar(50) NOT NULL, \`lastName\` varchar(50) NOT NULL, \`email\` varchar(50) NOT NULL, \`phone\` varchar(15) NOT NULL, \`documentNumber\` varchar(13) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, \`id_area\` varchar(36) NULL, \`id_charge\` varchar(36) NULL, \`id_typestaff\` varchar(36) NULL, \`id_typedocument\` varchar(36) NULL, UNIQUE INDEX \`REL_9cbabed01adf56e6dff86bc65e\` (\`id_area\`), UNIQUE INDEX \`REL_5e6a2ce15d9185e3dbbf0eb80c\` (\`id_charge\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_staff\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`leader\` tinyint NOT NULL DEFAULT 0, \`registerDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`id_staff\` varchar(36) NULL, \`id_project\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`spent\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`concept\` varchar(100) NOT NULL, \`registerDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`state\` tinyint NOT NULL DEFAULT 1, \`id_project\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(100) NOT NULL, \`description\` text NOT NULL, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`budget\` decimal(10,2) NOT NULL DEFAULT '0.00', \`state\` tinyint NOT NULL DEFAULT 1, \`id_customer\` varchar(36) NULL, \`id_typeservice\` varchar(36) NULL, UNIQUE INDEX \`IDX_dedfea394088ed136ddadeee89\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customer\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`documentNumber\` varchar(13) NOT NULL, \`name\` varchar(60) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, \`id_typedocument\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`userprofile\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_067411c4909a4f749064497311\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`login\` varchar(40) NOT NULL, \`password\` varchar(100) NOT NULL, \`remeber_token\` varchar(100) NOT NULL, \`state\` tinyint NOT NULL DEFAULT 1, \`id_userprofile\` varchar(36) NULL, UNIQUE INDEX \`IDX_a62473490b3e4578fd683235c5\` (\`login\`), UNIQUE INDEX \`IDX_638bac731294171648258260ff\` (\`password\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`staff_team\` ADD CONSTRAINT \`FK_ec4fdfa1fd4a0db262c207eadac\` FOREIGN KEY (\`id_staff\`) REFERENCES \`staff\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`staff_team\` ADD CONSTRAINT \`FK_23737ff8dc9bef429909ff80dfc\` FOREIGN KEY (\`id_team\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stage\` ADD CONSTRAINT \`FK_03f05074f9300ef7e7648f98f85\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`requirement\` ADD CONSTRAINT \`FK_8ebd6f76623cff07387568ec5f5\` FOREIGN KEY (\`id_stage\`) REFERENCES \`stage\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`activity\` ADD CONSTRAINT \`FK_890939410e620ac81ac2ac822c1\` FOREIGN KEY (\`id_requirement\`) REFERENCES \`requirement\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`activity\` ADD CONSTRAINT \`FK_f217d7e57a2d5db6d558f007559\` FOREIGN KEY (\`id_staff\`) REFERENCES \`staff\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`activity\` ADD CONSTRAINT \`FK_32590c14d3d8ab492450ffa41c5\` FOREIGN KEY (\`id_statusactivity\`) REFERENCES \`statusActivity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`staff\` ADD CONSTRAINT \`FK_9cbabed01adf56e6dff86bc65e2\` FOREIGN KEY (\`id_area\`) REFERENCES \`area\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`staff\` ADD CONSTRAINT \`FK_5e6a2ce15d9185e3dbbf0eb80c8\` FOREIGN KEY (\`id_charge\`) REFERENCES \`charge\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`staff\` ADD CONSTRAINT \`FK_27a5043f754e66272669ca6bbb3\` FOREIGN KEY (\`id_typestaff\`) REFERENCES \`typestaff\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`staff\` ADD CONSTRAINT \`FK_e21cea262d6a9d7a134c76c919f\` FOREIGN KEY (\`id_typedocument\`) REFERENCES \`typedocument\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_staff\` ADD CONSTRAINT \`FK_fa4b8ddcd53e92f1c751d7c9276\` FOREIGN KEY (\`id_staff\`) REFERENCES \`staff\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_staff\` ADD CONSTRAINT \`FK_a4c417d517146da4f7c97cbf719\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`spent\` ADD CONSTRAINT \`FK_37601fea91a3d66d8b5db36cefc\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD CONSTRAINT \`FK_8427cdd00ac82142d7b23c69973\` FOREIGN KEY (\`id_customer\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD CONSTRAINT \`FK_3b16500a8255e92dc4039b170bd\` FOREIGN KEY (\`id_typeservice\`) REFERENCES \`typeservice\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_9d939409df6a64a2da9ccb48835\` FOREIGN KEY (\`id_typedocument\`) REFERENCES \`typedocument\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_37d011e0db2a7a4354e5b757fcc\` FOREIGN KEY (\`id_userprofile\`) REFERENCES \`userprofile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_37d011e0db2a7a4354e5b757fcc\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_9d939409df6a64a2da9ccb48835\``);
        await queryRunner.query(`ALTER TABLE \`project\` DROP FOREIGN KEY \`FK_3b16500a8255e92dc4039b170bd\``);
        await queryRunner.query(`ALTER TABLE \`project\` DROP FOREIGN KEY \`FK_8427cdd00ac82142d7b23c69973\``);
        await queryRunner.query(`ALTER TABLE \`spent\` DROP FOREIGN KEY \`FK_37601fea91a3d66d8b5db36cefc\``);
        await queryRunner.query(`ALTER TABLE \`project_staff\` DROP FOREIGN KEY \`FK_a4c417d517146da4f7c97cbf719\``);
        await queryRunner.query(`ALTER TABLE \`project_staff\` DROP FOREIGN KEY \`FK_fa4b8ddcd53e92f1c751d7c9276\``);
        await queryRunner.query(`ALTER TABLE \`staff\` DROP FOREIGN KEY \`FK_e21cea262d6a9d7a134c76c919f\``);
        await queryRunner.query(`ALTER TABLE \`staff\` DROP FOREIGN KEY \`FK_27a5043f754e66272669ca6bbb3\``);
        await queryRunner.query(`ALTER TABLE \`staff\` DROP FOREIGN KEY \`FK_5e6a2ce15d9185e3dbbf0eb80c8\``);
        await queryRunner.query(`ALTER TABLE \`staff\` DROP FOREIGN KEY \`FK_9cbabed01adf56e6dff86bc65e2\``);
        await queryRunner.query(`ALTER TABLE \`activity\` DROP FOREIGN KEY \`FK_32590c14d3d8ab492450ffa41c5\``);
        await queryRunner.query(`ALTER TABLE \`activity\` DROP FOREIGN KEY \`FK_f217d7e57a2d5db6d558f007559\``);
        await queryRunner.query(`ALTER TABLE \`activity\` DROP FOREIGN KEY \`FK_890939410e620ac81ac2ac822c1\``);
        await queryRunner.query(`ALTER TABLE \`requirement\` DROP FOREIGN KEY \`FK_8ebd6f76623cff07387568ec5f5\``);
        await queryRunner.query(`ALTER TABLE \`stage\` DROP FOREIGN KEY \`FK_03f05074f9300ef7e7648f98f85\``);
        await queryRunner.query(`ALTER TABLE \`staff_team\` DROP FOREIGN KEY \`FK_23737ff8dc9bef429909ff80dfc\``);
        await queryRunner.query(`ALTER TABLE \`staff_team\` DROP FOREIGN KEY \`FK_ec4fdfa1fd4a0db262c207eadac\``);
        await queryRunner.query(`DROP INDEX \`IDX_638bac731294171648258260ff\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_a62473490b3e4578fd683235c5\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_067411c4909a4f749064497311\` ON \`userprofile\``);
        await queryRunner.query(`DROP TABLE \`userprofile\``);
        await queryRunner.query(`DROP TABLE \`customer\``);
        await queryRunner.query(`DROP INDEX \`IDX_dedfea394088ed136ddadeee89\` ON \`project\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`spent\``);
        await queryRunner.query(`DROP TABLE \`project_staff\``);
        await queryRunner.query(`DROP INDEX \`REL_5e6a2ce15d9185e3dbbf0eb80c\` ON \`staff\``);
        await queryRunner.query(`DROP INDEX \`REL_9cbabed01adf56e6dff86bc65e\` ON \`staff\``);
        await queryRunner.query(`DROP TABLE \`staff\``);
        await queryRunner.query(`DROP INDEX \`IDX_96d5b5afd3cbb93dfa3cdc29dc\` ON \`typedocument\``);
        await queryRunner.query(`DROP INDEX \`IDX_6d342914feb4ba34d4f6eb9c8f\` ON \`typedocument\``);
        await queryRunner.query(`DROP TABLE \`typedocument\``);
        await queryRunner.query(`DROP INDEX \`IDX_e0098522faf604f4f29ba54bba\` ON \`activity\``);
        await queryRunner.query(`DROP TABLE \`activity\``);
        await queryRunner.query(`DROP INDEX \`IDX_9bdaf6008b0ad2bb57ee07c94e\` ON \`statusActivity\``);
        await queryRunner.query(`DROP TABLE \`statusActivity\``);
        await queryRunner.query(`DROP TABLE \`requirement\``);
        await queryRunner.query(`DROP INDEX \`IDX_cbeb0a0f411c8b0879565811d0\` ON \`stage\``);
        await queryRunner.query(`DROP TABLE \`stage\``);
        await queryRunner.query(`DROP TABLE \`staff_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_cf461f5b40cf1a2b8876011e1e\` ON \`team\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP INDEX \`IDX_b0a9da460fa859a30f4ef32e91\` ON \`typestaff\``);
        await queryRunner.query(`DROP TABLE \`typestaff\``);
        await queryRunner.query(`DROP INDEX \`IDX_644ffaf8fbde4db798cb47712f\` ON \`area\``);
        await queryRunner.query(`DROP TABLE \`area\``);
        await queryRunner.query(`DROP INDEX \`IDX_0526aa92c29f6c1b8f3d2c34c1\` ON \`typeservice\``);
        await queryRunner.query(`DROP TABLE \`typeservice\``);
        await queryRunner.query(`DROP INDEX \`IDX_10e94f9460e7e74b0c356d40bc\` ON \`charge\``);
        await queryRunner.query(`DROP TABLE \`charge\``);
    }

}
