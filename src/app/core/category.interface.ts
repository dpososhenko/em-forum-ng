export interface Category {
  name: string;
  id: string;
  parent: string;
  grandParent: string;
  child: boolean;
}

export enum CategoryLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
