import { Tag } from "./tag";
import { User } from "./user";

export interface Topic {
  _id: string;
  user_id: User;
  title: string;
  content?: string;
  created_date?: Date;
  tags: Tag[];
  upvotes: number;
  comments: Comment[];
  upvoters: string[];
  downvoters: string[];
}
