import { createCellule } from '../src/game';
describe('cellule vivante avec moins de deux voisins meurt', () => {
  it('celulle vivante sans voisin meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 0 });
    expect(cellule.nextState()).toEqual('morte');
  });

  it('celulle vivante avec 1 voisin meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 1 });
    expect(cellule.nextState()).toEqual('morte');
  });
});

describe('cellule vivante avec deux ou trois cellulles voisines vivante reste en vie', () => {
  it('celulle vivante avec 2 voisins vit', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 2 });
    expect(cellule.nextState()).toEqual('vivante');
  });

  it('celulle vivante avec 3 voisins vit', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 3 });
    expect(cellule.nextState()).toEqual('vivante');
  });
});

describe('cellule vivante avec plus de trois voisins meurt', () => {
  it('celulle vivante avec 4 voisins meurt', () => {
    const cellule = createCellule({ state: 'vivante', nbVoisins: 4 });
    expect(cellule.nextState()).toEqual('morte');
  });
  
});

describe('cellule morte avec trois voisins renaît', () => {
  it('celulle morte avec 3 voisins naît', () => {
    const cellule = createCellule({ state: 'morte', nbVoisins: 3 });
    expect(cellule.nextState()).toEqual('vivante');
  });
  it('celulle morte avec 4 voisins reste morte', () => {
    const cellule = createCellule({ state: 'morte', nbVoisins: 4 });
    expect(cellule.nextState()).toEqual('morte');
  });
});
