import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;

    if (damage >= this._lifePoints) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damage;
    }

    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}

export default Monster;