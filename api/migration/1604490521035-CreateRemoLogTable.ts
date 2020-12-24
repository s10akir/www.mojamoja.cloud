import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRemoLogTable1604490521035 implements MigrationInterface {
    name = 'CreateRemoLogTable1604490521035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `remo_log` (`id` int NOT NULL AUTO_INCREMENT, `temperature` double NOT NULL, `humidity` double NOT NULL, `brightness` double NOT NULL, `motion` tinyint NOT NULL, `created_at` datetime(0) NOT NULL DEFAULT NOW(), `updated_at` datetime(0) NOT NULL DEFAULT NOW(), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `remo_log`");
    }

}
