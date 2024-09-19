export type UserReponse = {
  message: string;
  user: User;
  accessToken: string;
}
export type User =  {
  email: string;
  username: string;
}