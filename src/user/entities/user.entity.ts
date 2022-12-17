import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  emailAddress: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
