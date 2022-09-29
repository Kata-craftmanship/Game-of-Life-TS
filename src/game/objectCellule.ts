import { State } from './State';

export class Cellule {
  private constructor(private state: State, private nbVoisins: number) {}

  public static vivanteAvec(nbVoisins: number): Cellule {
    return new Cellule(State.VIVANTE, nbVoisins);
  }

  public static morteAvec(nbVoisins: number): Cellule {
    return new Cellule(State.MORTE, nbVoisins);
  }

  public nextState(): State {
    return this.state == State.VIVANTE
      ? this.checkCelluleEnVie()
      : this.checkCelluleMorte();
  }

  private checkCelluleMorte(): State {
    return this.nbVoisins == 3 ? State.VIVANTE : State.MORTE;
  }

  private checkCelluleEnVie(): State {
    return this.nbVoisins == 2 || this.nbVoisins == 3
      ? State.VIVANTE
      : State.MORTE;
  }
}
