import UserEntity from '../entities/user.entity';
import { fakeUsernames, generateFakeImage } from './fake.seed.runner';
import * as Bcrypt from 'bcrypt';

export const userFakeSeed = async () => {
  await UserEntity.delete({});
  const passwordHash = Bcrypt.hashSync('1234', 10);

  const users = fakeUsernames.map(
    ({ name, email }) =>
      new UserEntity({
        name: name,
        email,
        passwordHash,
      }),
  );
  await UserEntity.create({
    name: 'Client',
    email: 'client@example.com',
    passwordHash,
  }).save();

  await UserEntity.save(users);
};
