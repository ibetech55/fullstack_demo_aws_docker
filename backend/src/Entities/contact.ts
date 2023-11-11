import "reflect-metadata";
import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Quotes } from "./quote";

@Entity("contacts")
class Contacts {
  @PrimaryColumn({ type: "uuid" })
  _id?: string;

  @Column({ type: "varchar" })
  first_name: string;

  @Column({ type: "varchar" })
  last_name: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  address: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  state: string;

  @Column({ type: "varchar" })
  zip_code: string;

  @Column({ type: "varchar" })
  phone_number: string;

  @Column("boolean")
  active?: boolean;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at?: Date;

  @DeleteDateColumn({ type: "timestamp with time zone" })
  deleted_at?: Date;

  @OneToMany((type) => Quotes, (quotes) => quotes.contacts)
  quotes?: Quotes[];

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }
}

export { Contacts };
