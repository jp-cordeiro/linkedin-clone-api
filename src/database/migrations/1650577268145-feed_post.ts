import { MigrationInterface, QueryRunner } from 'typeorm';

export class feedPost1650577268145 implements MigrationInterface {
  name = 'feedPost1650577268145';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`feed_post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`body\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`feed_post\``);
  }
}
