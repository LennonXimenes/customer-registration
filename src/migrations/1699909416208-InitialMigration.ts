import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699909416208 implements MigrationInterface {
    name = 'InitialMigration1699909416208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "fullName" character varying(60) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "phone" character varying(11) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_1ebd98560ecd1f302d80cfcae8b" UNIQUE ("fullName"), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "UQ_88acd889fbe17d0e16cc4bc9174" UNIQUE ("phone"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
