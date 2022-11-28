export interface Activity {
  _id: string;
  category: string;
  title: string;
  description: string;
  createdBy: string;
  labels: string[];
  level: string;
  assignees: string[];
  comments: ActivityComment[];
  isOpen: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActivityComment {
  _id: string;
  avatar: string;
  body: string;
  by: string;
  createdAt: Date;
}
