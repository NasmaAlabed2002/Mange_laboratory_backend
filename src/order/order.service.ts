import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {Order} from './entities/order.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private OrderModel: Model<Order>) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    //console.log(createOrderDto);
    
    const createdOrder = new this.OrderModel(createOrderDto);
    return createdOrder.save();
  }
  async findAll() {
    return await this.OrderModel.find();
  }

  async findOne(id) {
    return await this.OrderModel.findOne({_id:id});
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    await this.OrderModel.findByIdAndUpdate(id, updateOrderDto, {new : true});
  }

 async remove(id: string) {
    await this.OrderModel.findByIdAndDelete(id);
  }
}
