export interface Comment {
  _id: number;
  user_id: number;
  topic_id: number;
  text: string;
  created_date?: Date;
  upvotes: number;
}
