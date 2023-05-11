import { User } from "./user";

export interface Comment {
  _id: string;
  user_id: User;
  topic_id: string;
  text: string;
  created_date?: Date;
  upvotes: number;
}
