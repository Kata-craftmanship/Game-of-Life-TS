export type State = 'vivante' | 'morte';

export type Params = {
  state: State;
  nbVoisins: number;
};

export type Cellule = {
  nextState: () => State;
};

const checkCelluleEnVie = (nbVoisins: number): State =>
  nbVoisins == 2 || nbVoisins == 3 ? 'vivante' : 'morte';

const checkCelluleMorte = (nbVoisins: number): State =>
  nbVoisins === 3 ? 'vivante' : 'morte';

export const createCellule = (params: Params): Cellule => {
  const { nbVoisins, state } = params;
  return {
    nextState: () =>
      state === 'vivante'
        ? checkCelluleEnVie(nbVoisins)
        : checkCelluleMorte(nbVoisins),
  };
};
