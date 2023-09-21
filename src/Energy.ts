// A interface deverá possuir os atributos:
//  type_, do tipo EnergyType; ✨✨
//    Esse novo tipo pode deve receber os valores: 'mana' ou 'stamina';
//    O tipo EnergyType também deve ser exportado.
//   amount, do tipo number
// Para implementar a interface Energy, é necessário criar um tipo novo, o type EnergyType;
type EnergyType = 'mana' | 'stamina';

interface Energy {
  amount: number;
  type_: EnergyType;
}

export default Energy;
export { EnergyType };
