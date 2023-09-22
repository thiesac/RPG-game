import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {

  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy;

  // attack(enemy: SimpleFighter): void;

  special?(enemy: Fighter): void;

  levelUp(): void;

  // receiveDamage(attackPoints: SimpleFighter): number;
}

export default Fighter;