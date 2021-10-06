import { motoboys } from "../data/motoboysData";
import stores from "../data/storeData";

const missingInfoMessage = "Informações ausentes. É necessário informar um motoboy.";
const invalidInfoMessage = `Informações invalidas. É necessário informar um motoboy que existe, no formato "Moto <numero>"`;

const getMotoboyInfo = (motoboySelected) => {
  if (motoboySelected === "") return missingInfoMessage;
  const motoboyExists = motoboys.find(({ name }) => motoboySelected === name);
  if (motoboyExists) return motoboyExists;
  return invalidInfoMessage;
};

console.log(getMotoboyInfo('Moto 1'))

export default getMotoboyInfo;