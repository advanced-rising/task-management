import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Task } from './task.entity';

import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { ConfigModule } from '@nestjs/config';
import { TasksService } from './tasks.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Task]), AuthModule],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
