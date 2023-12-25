const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmporlitros = 10;
const distanciaemkm = 100;
const tipoCombustivel = "Gasolina";

const litrosconsumidos = distanciaemkm / kmporlitros;
if (tipoCombustivel === "Etanol") {
  const valorgasto = litrosconsumidos * precoEtanol;
  console.log(valorgasto.toFixed(2));
}

else{
    const valorgasto = litrosconsumidos * precoGasolina;
    console.log(valorgasto.toFixed(2));
}
 
    

