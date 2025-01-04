import { Injectable } from '@nestjs/common';
import { CreateListenerDto } from './dto/create-listener.dto';
import { UpdateListenerDto } from './dto/update-listener.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listener } from './entities/listener.entity';

@Injectable()
export class ListenersService {
  constructor(
    @InjectRepository(Listener)
    private listenerRepository: Repository<Listener>,
  ) {}

  async create(createListenerDto: CreateListenerDto) {
    await this.listenerRepository.save({
      ...createListenerDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return 'リスナー登録に成功しました';
  }

  async findAll() {
    return await this.listenerRepository.find();
  }

  async findOne(id: number) {
    return await this.listenerRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateListenerDto: UpdateListenerDto) {
    await this.listenerRepository.update(id, {
      ...updateListenerDto,
      updatedAt: new Date(),
    });
    return 'リスナー情報を更新しました';
  }

  async remove(id: number) {
    await this.listenerRepository.delete(id);
  }
}
