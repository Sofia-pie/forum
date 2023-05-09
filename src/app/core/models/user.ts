export interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePictureUrl?: string;
  bio?: string;
}
