import { motoboys } from "../data/motoboysData.js";
import { stores } from "../data/storeData.js";

// Digite na variável a seguir o motoboy que deseja consultar.
const selectedMotoboy = 'Moto 4';

const missingInfoMessage = 'Informações ausentes. É necessário informar um motoboy.';
const invalidInfoMessage = `Informações invalidas. É necessário informar um motoboy que existe, no formato "Moto <numero>"`;

const percentage = (percentage, totalValue) => {
  return (percentage * totalValue) / 100;
}; 

const getMotoboyResults = ({ name, deliveryPrice, stores }, storesData) => {
  let allOrders = [];
  let amountReceived = 0;
  
  const orders = stores.forEach((stores) => {
    const selectedStore = (storesData.find((storeInfo) => storeInfo.name === stores));
    selectedStore.orders.forEach((price) => allOrders.push(price));
    const values = selectedStore.orders.reduce((total, number) => total + number, 0);
    amountReceived = amountReceived + percentage(selectedStore.payment, values);
  });

  const numberOfOrders = allOrders.length;
  let fixedValue = deliveryPrice * numberOfOrders;
  const totalValue = amountReceived + fixedValue;

  console.log(`${name} possui um total de ${numberOfOrders} pedidos, das loja(s): ${stores}. Receberá no total o valor de: R$ ${totalValue}.`);
};

const getMotoboyInfo = (motoboySelected) => {
  if (motoboySelected === undefined || motoboySelected === '') return console.log(missingInfoMessage);
  const motoboyExists = motoboys.find(({ name }) => motoboySelected === name);
  if (motoboyExists) return getMotoboyResults(motoboyExists, stores);
  return console.log(invalidInfoMessage);
};

getMotoboyInfo(selectedMotoboy);
