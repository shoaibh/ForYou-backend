import { BeforeInsert, Column, Entity } from 'typeorm';
import { BeforeUpdate } from 'typeorm/index';
import { ETable } from '../ETable';
import ModelEntity from '../util/model.entity';

@Entity({ name: ETable.User })
export default class UserEntity extends ModelEntity<UserEntity> {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @BeforeInsert()
  @BeforeUpdate()
  public async beforeInsertHooks() {
    this.email = this.email.toLowerCase();
  }

  toJSON({
    includes = ['id', 'name', 'email'],
    skips = [],
  }: {
    includes?: (keyof UserEntity)[];
    skips?: (keyof UserEntity)[];
  }): Partial<UserEntity> {
    const d: any = super.toJSON({ includes, skips });
    return d;
  }
}
