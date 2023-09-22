import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

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
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  attack(enemy: SimpleFighter): void {
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

    const lifePointsIncrement = Math
      .min(increment, this._maxLifePoints - this._lifePoints);

    if (this._lifePoints < this._maxLifePoints) {
      this._lifePoints += lifePointsIncrement;
    }
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: SimpleFighter): number {
    const damage = attackPoints.strength - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  // special?(enemy: Fighter): void {
  // }
}

export default Character;
