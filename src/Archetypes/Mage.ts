import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instanceCount = 0;
  private _hability: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this._hability;
  }

  public static createdArchetypeInstances(): number {
    return this._instanceCount;
  }
}

export default Mage;