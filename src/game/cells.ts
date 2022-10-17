export type State = 'vivante' | 'morte';

type Params = {
  state: State;
  nbVoisins: number;
};

export type Cellule = {
  nextState: () => State;
};

export function createCellule(params: Params): Cellule {
  const { state, nbVoisins } = params;

  const checkCelluleVivante =
    nbVoisins == 2 || nbVoisins == 3 ? 'vivante' : 'morte';

  const checkCelluleMorte = nbVoisins == 3 ? 'vivante' : 'morte';

  return {
    nextState: () =>
      state == 'vivante' ? checkCelluleVivante : checkCelluleMorte,
  };
}
