import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContactsTable1697144038932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "contacts",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "first_name",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "last_name",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "state",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "zip_code",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "phone_number",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "active",
            type: "bool",
            default: true,
            isNullable: false,
          },
          {
            name: "created_at",
            type: "TIMESTAMPTZ",
            default: "NOW()",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "TIMESTAMPTZ",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "TIMESTAMPTZ",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("contacts");
  }
}
