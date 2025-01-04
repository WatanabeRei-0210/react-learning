import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1735984671901 implements MigrationInterface {
    name = ' $npmConfigName1735984671901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listeners" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "category" varchar NOT NULL, "description" varchar NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "listeners"`);
    }

}
