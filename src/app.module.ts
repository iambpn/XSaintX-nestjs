import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks/tasks.repository';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';


@Module({
  imports: [TasksModule, 
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5439,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [TasksController],
  providers: [TasksRepository, TasksService],
  exports: [TasksService, TypeOrmModule],
})
export class AppModule {}
