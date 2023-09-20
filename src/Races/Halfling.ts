import Race from './Race';

class Halfling extends Race {
  private static instanceCount = 0;

  constructor() {
    super('Halfling', 60);
    Halfling.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }

  get maxLifePoints(): number {
    // return Number(this.maxLifePoints);
    return 60;
  }
}

export default Halfling;