import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order, Product])],
  providers: [UserService],
  exports: [UserService]
})
export class SharedModule { }