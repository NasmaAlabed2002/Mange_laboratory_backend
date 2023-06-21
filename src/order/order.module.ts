import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import {Order, Orderechema} from './entities/order.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: Orderechema }])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
