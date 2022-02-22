import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  owner: User;

  @Column({
    default: 0,
  })
  totalPrice: number;

  @ManyToMany(() => Product)
  products: Product[];
}
