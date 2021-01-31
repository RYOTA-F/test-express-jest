import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript'

@Table({
  modelName: 'post',
  tableName: 'posts',
})
export class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  readonly id!: number

  @Column(DataType.INTEGER)
  user_id!: number

  @Column(DataType.INTEGER)
  content!: string
}
