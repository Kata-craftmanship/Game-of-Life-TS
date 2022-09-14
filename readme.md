# Bonnes pratiques SOLID, Object Calisthenics et TDD

## SOLID

1. Single responsibility principle
2. Open/closed principle
3. Liskov substitution principle
4. Interface segregation principle
5. Dependency inversion principle

## 9 OC Rules

1. Only One Level Of Indentation Per Method
2. Don't Use The ELSE Keyword
3. Wrap All Primitives And Strings
4. First-Class Collections
5. One Dot Per Line
6. Don't Abbreviate
7. Keep All Entities Small
8. No Classes With More Than Two Instance Variables
9. No Getters/Setters/Properties

## TDD

1. Write the test
2. Make it compile
3. Watch it fail
4. Make it pass
5. Refactor
   - SOLID
   - 9 OC Rules
6. Replay test

> L'objectif de ce Kata est d'implémenter les règles du jeu de la vie

## Jeu de la vie

- Toute cellule vivante avec moins de deux cellules voisines vivantes meurt pour cause de sous population
- Toute cellule vivante avec deux ou trois cellules voisines vivantes reste en vie
- Toute cellule vivante avec plus de trois cellules voisines vivantes meurt pour cause de sur population
- Toute cellule morte avec exactement trois cellules voisines vivantes naît, c'est la reproduction

Selon l'état courant de la cellule et le nombre de ses voisins, déterminer son état final.

## Commandes

- `npm test` -> lancement unitaire des tests
- `npm run test:watch` -> Lancement continu des tests
- `npm run test:coverage` -> lancement unitaire des tests avec couverture de code
