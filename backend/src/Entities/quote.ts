import "reflect-metadata";
import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contacts } from "./contact";

@Entity("quotes")
class Quotes {
  @PrimaryColumn({ type: "uuid" })
  _id?: string;

  @Column({ type: "varchar" })
  departure_location: string;

  @Column({ type: "varchar" })
  destination_location: string;

  @Column({ type: "varchar" })
  depart_date: string;

  @Column({ type: "varchar" })
  return_date: string;

  @Column({ type: "numeric" })
  number_travellers: number;

  @Column({ type: "varchar" })
  transportation: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "boolean" })
  active: boolean;

  @Column({ type: "varchar" })
  contact_id: string;

  @Column({ type: "numeric" })
  price: number;

  @CreateDateColumn({ type: "timestamp with time zone" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp with time zone" })
  updated_at?: Date;

  @DeleteDateColumn({ type: "timestamp with time zone" })
  deleted_at?: Date;

  @ManyToOne((type) => Contacts, (contacts) => contacts.quotes)
  @JoinColumn({ name: "contact_id" })
  contacts?: Contacts;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }
}

export { Quotes };
