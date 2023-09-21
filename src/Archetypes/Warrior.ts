import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instanceCount = 0;
  private _hability: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this._hability;
  }

  public static createdArchetypeInstances(): number {
    return this._instanceCount;
  }
}

export default Warrior;