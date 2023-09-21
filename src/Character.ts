import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

// A classe deve implementar a interface Fighter;
class Character implements Fighter {
  // A classe Character deve ter os atributos privados: race, archetype, maxLifePoints, lifePoints, strength, defense, dexterity e energy, todos inicializados em seu construtor;
  // Os atributos da classe Character podem ser lidos mas não podem ser alterados
  //    O atributo race deve ser do tipo Race;
  private _race: Race;
  //     O atributo archetype deve ser do tipo Archetype;
  private _archetype: Archetype;
  //    O atributo maxLifePoints deve ser do tipo number;
  private _maxLifePoints: number;
  //    O atributo lifePoints deve ser do tipo number;
  private _lifePoints: number;
  //    O atributo strength deve ser do tipo number;
  private _strength: number;
  //    O atributo defense deve ser do tipo number;
  private _defense: number;
  //    O atributo dexterity deve ser do tipo number;
  private _dexterity: number;
  //    O atributo energy deve ser do tipo Energy;
  private _energy: Energy;

  //  O atributo name deve ser recebido como parâmetro no construtor e deve ser usado para dar nome à sua personagem.
  //  Devem ser inicializados no construtor:
  //     dexterity com um valor aleatório de no mínimo 1 e no máximo 10 pontos. ✨✨;
  //     race por padrão com uma instância de Elf(A destreza de Elf deve ser a mesma definida em dexterity);
  //     archetype por padrão com uma instância de Mage;
  //     maxLifePoints por padrão com metade do maxLifePoints da raça instanciada;
  //     lifePoints por padrão com o mesmo valor de maxLifePoints da classe;
  //     strength, defense com valores aleatórios de no mínimo 1 e no máximo 10 pontos; ✨✨
  //      energy por padrão:
  //        type_ com o mesmo valor do arquétipo instanciado;
  //        amount com um valor aleatório de no mínimo 1 e no máximo 10 pontos. ✨✨
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, Number(this._dexterity));
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
  // A classe Character também deve implementar os métodos estendidos da interface Fighter;
  //    receiveDamage 😵 este método recebe por parâmetro um valor(attackPoints) e as regras são:
  //      Para calcular o dano recebido(damage), o valor da defesa(defense) do personagem deve ser subtraído do valor do ataque recebido(attackPoints);
  //      Se o dano calculado(damage) for maior que 0, você perde esse valor em pontos de vida(lifePoints).Se o dano calculado(damage) for igual ou menor a zero,
  //      você deve perder apenas 1 ponto de vida(lifePoints);
  //      Ao receber o ataque e perder pontos de vida(lifePoints), e se sua vida chegar a 0 ou menos, você deve fixá - la com o valor - 1;
  //      Ao final sempre retorne o valor atualizado de seus pontos de vida.
  
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  // Implementação do método attack
  attack(enemy: Fighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    const increment = getRandomInt(1, 10);
    this._maxLifePoints += increment;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = 0;
    }

    return damage;
  }

  // special?(enemy: Fighter): void {
  // }
}

export default Character;
