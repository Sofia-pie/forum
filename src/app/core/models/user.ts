export interface User {
  _id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePictureUrl?: string;
  bio?: string;
}
