import { Common } from './common';
import { User } from './user';

export interface Comment extends Common {
  topic_id: string;
  text: string;
  created_date?: Date;
}
