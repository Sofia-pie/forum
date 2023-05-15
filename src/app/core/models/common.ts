import { User } from './user';

export interface Common {
  _id: string;
  user_id: User;
  upvotes: number;
  upvoters: string[];
  downvoters: string[];
}
