export interface Category {
  name: string;
  _id: string;
  parent: string;
  parentName?: string;
  grandParent: string;
  grandParentName?: string;
  children: boolean;
}

export enum CategoryLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
