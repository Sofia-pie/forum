export interface Comment {
  _id: string;
  user_id: string;
  topic_id: string;
  text: string;
  created_date?: Date;
  upvotes: number;
}
