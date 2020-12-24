import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class RemoLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('double')
  temperature: number

  @Column('double')
  humidity: number

  @Column('double')
  brightness: number

  @Column('boolean')
  motion: boolean

  @CreateDateColumn({
    name: 'created_at',
    precision: 0,
    default: () => 'NOW()',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    precision: 0,
    default: () => 'NOW()',
  })
  updatedAt: Date
}
