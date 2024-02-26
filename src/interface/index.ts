export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photo: string;
  isAdmin: boolean;
  verification_account: boolean;
  access_token: string;
}

export type TUser = Partial<IUser>;

export interface IBook {
  _id: string;
  title: string;
  author: string;
  amount: string;
  due: string;
  cover: string;
  desc: string;
  userId: string;
}

export type TBook = Partial<IBook>;
