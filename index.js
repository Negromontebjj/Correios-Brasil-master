
const { consultarCep } = require ("correios-brasil");

/** 
* Consultutar CEP
*/

const cep = ('53437470')

consultarCep(cep).then((response) => {
    console.log(response);
});


/** 
* Calcular preços e Prazos
*/

const { calcularPrecoPrazo } = require('correios-brasil');

let args = {
  
  sCepOrigem: '53437470',
  sCepDestino: '53437400',
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '20',
  nVlAltura: '20',
  nVlLargura: '20',
  nCdServico: ['04014', '04510'],
  nVlDiametro: '0',
};

calcularPrecoPrazo(args).then(response => {
  console.log(response);
});



 
