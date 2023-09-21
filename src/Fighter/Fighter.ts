import Energy from '../Energy';

interface Fighter {

  // A interface deverá possuir os atributos:
  //    lifePoints, do tipo number;
  //    strength, do tipo number;
  //    defense, do tipo number;
  //    energy, do tipo Energy. ✨✨
  //      O atributo energy deve ser opcional
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  // A interface deverá possuir os métodos:
  //    attack(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno(void);
  attack(enemy: Fighter): void;
  //    special(), que recebe um enemy do tipo Fighter como parâmetro e não possui retorno(void); ✨✨
  //      o método special() deve ser opcional
  special?(enemy: Fighter): void;
  //    levelUp(), que não recebe parâmetro e não possui retorno(void);
  levelUp(): void;
  //    receiveDamage(), que recebe um attackPoints do tipo number como parâmetro e retorne um number.
  receiveDamage(attackPoints: number): number;
}

export default Fighter;