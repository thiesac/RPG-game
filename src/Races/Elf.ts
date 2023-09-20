import Race from './Race';

class Elf extends Race {
  private static instanceCount = 0;

  constructor() {
    super('Elf', 99);
    Elf.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instanceCount;
  }

  get maxLifePoints(): number {
    // return Number(this.maxLifePoints);
    return 99;
  }
}

export default Elf;