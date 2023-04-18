export interface Topic {
  _id: number;
  user_id: number;
  title: string;
  content?: string;
  created_date: Date;
  tags: string[];
  upvotes: number;
}
