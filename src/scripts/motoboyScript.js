import { motoboys } from "../data/motoboysData.js";
import { stores } from "../data/storeData.js";

const missingInfoMessage = "Informações ausentes. É necessário informar um motoboy.";
const invalidInfoMessage = `Informações invalidas. É necessário informar um motoboy que existe, no formato "Moto <numero>"`;

const percentage = (percentage, totalValue) => {
  return (percentage * totalValue) / 100;
} 

const getMotoboyResults = ({ name, deliveryPrice, stores }, storesData) => {
  let allOrders = [];
  let amountReceived = 0;
  const numberOfOrders = allOrders.length;

  
  const orders = stores.forEach((stores) => {
    const selectedStoreOrders = (storesData.find((storeInfo) => storeInfo.name === stores).orders);
    selectedStoreOrders.forEach((price) => allOrders.push(price));
  });


  
  console.log(allOrders);
};

const getMotoboyInfo = (motoboySelected) => {
  if (motoboySelected === undefined) return missingInfoMessage;
  const motoboyExists = motoboys.find(({ name }) => motoboySelected === name);
  if (motoboyExists) return getMotoboyResults(motoboyExists, stores);
  return invalidInfoMessage;
};

getMotoboyInfo('Moto 4');