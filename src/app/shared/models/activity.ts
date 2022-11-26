export interface Activity {
  _id: string;
  category: string;
  title: string;
  description: string;
  createdBy: string;
  tags: string[];
  level: string;
  assignees: string[];
  comments: ActivityComment[];
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActivityComment {
  _id: string;
  username: string;
  avatar: string;
  comment: string;
  createdAt: Date;
}
