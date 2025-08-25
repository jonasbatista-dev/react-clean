import { AccountModel } from '../models/account-model';

type AuthenticationParans = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (model: AuthenticationParans) => Promise<AccountModel>;
}
