export interface ILogin {
  email: string
  password: string
}

export interface ILoginResponse {
  user?: IUser
  message?: string
}

export interface IUser {
  email?: string;
  password?: string;
  username?: string;
  _id?: string;
}
