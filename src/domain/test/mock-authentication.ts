import { AuthenticationParans } from 'domain/usercases/authentication';
import { faker } from '@faker-js/faker';

export const mockAuthentication = (): AuthenticationParans => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
