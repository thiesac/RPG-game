import Race from './Race';

class Halfling extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instanceCount; 
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;