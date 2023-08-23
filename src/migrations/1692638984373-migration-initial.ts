import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationInitial1692638984373 implements MigrationInterface {
    name = 'MigrationInitial1692638984373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`area\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_644ffaf8fbde4db798cb47712f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`charge\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(40) NOT NULL, UNIQUE INDEX \`IDX_10e94f9460e7e74b0c356d40bc\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`team\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_cf461f5b40cf1a2b8876011e1e\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`member_team\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`dateAssignment\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`member_id\` varchar(36) NULL, \`team_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`member\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(50) NOT NULL, \`firstName\` varchar(50) NOT NULL, \`lastName\` varchar(50) NOT NULL, \`email\` varchar(50) NOT NULL, \`phone\` varchar(15) NOT NULL, \`id_area\` varchar(36) NULL, \`id_charge\` varchar(36) NULL, UNIQUE INDEX \`REL_18a5e6624d8e47ef4d9de804dc\` (\`id_area\`), UNIQUE INDEX \`REL_18388a41f5c5477c156490402c\` (\`id_charge\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(100) NOT NULL, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`budget\` decimal(10,2) NOT NULL DEFAULT '0.00', UNIQUE INDEX \`IDX_dedfea394088ed136ddadeee89\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`member_project\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`dateAssignment\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`id_member\` varchar(36) NULL, \`id_project\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`userprofile\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(30) NOT NULL, UNIQUE INDEX \`IDX_067411c4909a4f749064497311\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`login\` varchar(50) NOT NULL, \`password\` varchar(150) NOT NULL, \`remeber_token\` varchar(150) NOT NULL, \`id_userprofile\` varchar(36) NULL, UNIQUE INDEX \`IDX_a62473490b3e4578fd683235c5\` (\`login\`), UNIQUE INDEX \`IDX_638bac731294171648258260ff\` (\`password\`), UNIQUE INDEX \`REL_37d011e0db2a7a4354e5b757fc\` (\`id_userprofile\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`member_team\` ADD CONSTRAINT \`FK_cf92f31838d5c088832bb7da878\` FOREIGN KEY (\`member_id\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member_team\` ADD CONSTRAINT \`FK_43fedf8b453d830db23a4563a7d\` FOREIGN KEY (\`team_id\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_18a5e6624d8e47ef4d9de804dcc\` FOREIGN KEY (\`id_area\`) REFERENCES \`area\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member\` ADD CONSTRAINT \`FK_18388a41f5c5477c156490402c3\` FOREIGN KEY (\`id_charge\`) REFERENCES \`charge\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member_project\` ADD CONSTRAINT \`FK_d90f9be7f3323f1cea39e7b9434\` FOREIGN KEY (\`id_member\`) REFERENCES \`member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member_project\` ADD CONSTRAINT \`FK_b702d4f0968941b071b0cc6f1d8\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_37d011e0db2a7a4354e5b757fcc\` FOREIGN KEY (\`id_userprofile\`) REFERENCES \`userprofile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_37d011e0db2a7a4354e5b757fcc\``);
        await queryRunner.query(`ALTER TABLE \`member_project\` DROP FOREIGN KEY \`FK_b702d4f0968941b071b0cc6f1d8\``);
        await queryRunner.query(`ALTER TABLE \`member_project\` DROP FOREIGN KEY \`FK_d90f9be7f3323f1cea39e7b9434\``);
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_18388a41f5c5477c156490402c3\``);
        await queryRunner.query(`ALTER TABLE \`member\` DROP FOREIGN KEY \`FK_18a5e6624d8e47ef4d9de804dcc\``);
        await queryRunner.query(`ALTER TABLE \`member_team\` DROP FOREIGN KEY \`FK_43fedf8b453d830db23a4563a7d\``);
        await queryRunner.query(`ALTER TABLE \`member_team\` DROP FOREIGN KEY \`FK_cf92f31838d5c088832bb7da878\``);
        await queryRunner.query(`DROP INDEX \`REL_37d011e0db2a7a4354e5b757fc\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_638bac731294171648258260ff\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_a62473490b3e4578fd683235c5\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_067411c4909a4f749064497311\` ON \`userprofile\``);
        await queryRunner.query(`DROP TABLE \`userprofile\``);
        await queryRunner.query(`DROP TABLE \`member_project\``);
        await queryRunner.query(`DROP INDEX \`IDX_dedfea394088ed136ddadeee89\` ON \`project\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP INDEX \`REL_18388a41f5c5477c156490402c\` ON \`member\``);
        await queryRunner.query(`DROP INDEX \`REL_18a5e6624d8e47ef4d9de804dc\` ON \`member\``);
        await queryRunner.query(`DROP TABLE \`member\``);
        await queryRunner.query(`DROP TABLE \`member_team\``);
        await queryRunner.query(`DROP INDEX \`IDX_cf461f5b40cf1a2b8876011e1e\` ON \`team\``);
        await queryRunner.query(`DROP TABLE \`team\``);
        await queryRunner.query(`DROP INDEX \`IDX_10e94f9460e7e74b0c356d40bc\` ON \`charge\``);
        await queryRunner.query(`DROP TABLE \`charge\``);
        await queryRunner.query(`DROP INDEX \`IDX_644ffaf8fbde4db798cb47712f\` ON \`area\``);
        await queryRunner.query(`DROP TABLE \`area\``);
    }

}
