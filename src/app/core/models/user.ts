export interface User {
  _id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
  bio?: string;
}
