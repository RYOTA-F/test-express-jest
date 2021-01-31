import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript'

@Table({
  modelName: 'user',
  tableName: 'users',
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  readonly id!: number

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.INTEGER)
  age!: number
}
