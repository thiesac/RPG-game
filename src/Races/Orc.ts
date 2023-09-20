import Race from './Race';

class Orc extends Race {
  private static instanceCount = 0;

  constructor() {
    super('Orc', 74);
    Orc.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }

  get maxLifePoints(): number {
    // return Number(this.maxLifePoints);
    return 74;
  }
}

export default Orc;