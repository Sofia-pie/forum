export interface Topic {
  _id: string;
  user_id: string;
  title: string;
  content?: string;
  created_date?: Date;
  tags: string[];
  upvotes: number;
}
