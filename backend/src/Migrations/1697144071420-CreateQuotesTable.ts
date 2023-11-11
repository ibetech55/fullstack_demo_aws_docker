import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuotesTable1697144071420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "quotes",
        columns: [
          {
            name: "_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "departure_location",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "destination_location",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "depart_date",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "return_date",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "number_travellers",
            type: "Integer",
            isNullable: false,
          },
          {
            name: "transportation",
            type: "varchar(100)",
            default: true,
            isNullable: false,
          },
          {
            name: "price",
            type: "DECIMAL(10, 2)",
            isNullable: false,
          },
          {
            name: "status",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "active",
            type: "varchar(100)",
            default: true,
            isNullable: false,
          },
          {
            name: "contact_id",
            type: "uuid",
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
        foreignKeys: [
          {
            referencedTableName: "contacts",
            referencedColumnNames: ["_id"],
            columnNames: ["contact_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("quotes");
  }
}
