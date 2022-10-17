import { createCellule, State } from '../src/game';
import * as fc from 'fast-check';

describe('Toute cellule vivante avec moins de deux cellules voisines vivantes meurt pour cause de sous population', () => {
  it('cellule vivante sans voisin meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 0 });
    expect(cellule.nextState()).toEqual('morte');
  });

  it('cellule vivante avec un voisin meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 1 });
    expect(cellule.nextState()).toEqual('morte');
  });
});

describe('Toute cellule vivante avec deux ou trois cellules voisines vivantes reste en vie', () => {
  it('cellule vivante avec deux voisins vie', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 2 });
    expect(cellule.nextState()).toEqual('vivante');
  });

  it('cellule vivante avec trois voisins vie', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 3 });
    expect(cellule.nextState()).toEqual('vivante');
  });
});

describe('Toute cellule vivante avec plus de trois cellules voisines vivantes meurt pour cause de sur population', () => {
  it('cellule vivante avec quatre voisins meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 4 });
    expect(cellule.nextState()).toEqual('morte');
  });

  it('cellule vivante avec cinq voisins meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 5 });
    expect(cellule.nextState()).toEqual('morte');
  });
});

describe("Toute cellule morte avec exactement trois cellules voisines vivantes naît, c'est la reproduction", () => {
  it('cellule morte avec trois voisins naît', () => {
    const cellule = createCellule({ state: 'morte', nbVoisins: 3 });
    expect(cellule.nextState()).toEqual('vivante');
  });
});

describe('Toute cellule morte avec deux voisins reste morte', () => {
  it('cellule morte avec deux voisins reste morte', () => {
    const cellule = createCellule({ state: 'morte', nbVoisins: 2 });
    expect(cellule.nextState()).toEqual('morte');
  });
});

describe('Celulle vivante qui reste vivante', () => {
  it('celulle doit rester vivante', () => {
    const state = 'vivante';
    fc.assert(
      fc.property(fc.integer({ min: 2, max: 3 }), (nbVoisins) => {
        const cellule = createCellule({
          state,
          nbVoisins: nbVoisins,
        });
        return cellule.nextState() == state;
      })
    );
  });
});

const assert = (
  initialState: State,
  finalState: State,
  min: number,
  max: number
) =>
  fc.assert(
    fc.property(fc.integer({ min, max }), (nbVoisins) => {
      const cellule = createCellule({
        state: initialState,
        nbVoisins: nbVoisins,
      });
      return cellule.nextState() == finalState;
    })
  );

describe('Celulle morte qui reste morte', () => {
  it('celulle doit rester morte', () => assert('morte', 'morte', 4, 8));
});

describe('Celulle vivante qui reste vivante', () => {
  it('celulle doit rester morte', () => assert('vivante', 'vivante', 2, 3));
});
