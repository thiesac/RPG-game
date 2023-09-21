import Race from './Race';

class Dwarf extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCount += 1; 
  }

  static createdRacesInstances(): number {
    return this._instanceCount; 
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;