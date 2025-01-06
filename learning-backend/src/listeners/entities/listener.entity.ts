import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('listeners')
export class Listener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
