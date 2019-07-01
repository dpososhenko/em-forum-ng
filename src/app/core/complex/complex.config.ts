export enum ComplexTypes {
  All = 'all',
  Evromisto = 'evromisto',
}

export const Complexes = {
  [ ComplexTypes.All ]: 'Все ЖК',
  [ ComplexTypes.Evromisto ]: 'Европейське мисто',
};

export interface ComplexState {
  readonly complex: ComplexTypes;
}
