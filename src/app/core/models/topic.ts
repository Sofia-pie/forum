import { Comment } from './comments';
import { Common } from './common';
import { Tag } from './tag';
import { User } from './user';

export interface Topic extends Common {
  title: string;
  content?: string;
  created_date?: Date;
  tags: Tag[];

  comments: Comment[];
}
