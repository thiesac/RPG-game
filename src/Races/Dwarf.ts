import Race from './Race';

class Dwarf extends Race {
  private static instanceCount = 0;

  constructor() {
    super('Dwarf', 80);
    Dwarf.instanceCount += 1; 
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount; 
  }

  get maxLifePoints(): number {
    // return Number(this.maxLifePoints);
    return 80;
  }
}

export default Dwarf;