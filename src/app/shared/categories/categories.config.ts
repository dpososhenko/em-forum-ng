import { Category } from 'src/app/core/category.interface';

export const CLH: Category[] = [
  {
    name: 'Детский мир',
    id: 'CLH_0',
    child: true,
    parent: null,
    grandParent: null,
  }
];

export const CLM: Category[] = [
  {
    name: 'Детская одежда',
    id: 'CLM_0',
    child: true,
    parent: 'CLH_0',
    grandParent: null,
  },
  {
    name: 'Детская обувь',
    id: 'CLM_1',
    child: false,
    parent: 'CLH_0',
    grandParent: null,
  },
  {
    name: 'Детские коляски',
    id: 'CLM_2',
    child: false,
    parent: 'CLH_0',
    grandParent: null,
  },
];

export const CLL: Category[] = [
  {
    name: 'Одежда для мальчиков',
    id: 'CLL_0',
    child: false,
    parent: 'CLM_0',
    grandParent: 'CLH_0',
  },
  {
    name: 'Одежда для девочек',
    id: 'CLL_1',
    child: false,
    parent: 'CLM_0',
    grandParent: 'CLH_0',
  },
  {
    name: 'Одежда для новорожденных',
    id: 'CLL_2',
    child: false,
    parent: 'CLM_0',
    grandParent: 'CLH_0',
  },
];
