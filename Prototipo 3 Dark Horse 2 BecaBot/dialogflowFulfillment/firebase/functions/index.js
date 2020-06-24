'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const axios = require('axios');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function getSpreadsheetData(){
  	return axios.get('https://sheetdb.io/api/v1/zbr63yrntatp8');
  }

 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  
  function saveDataHandler(agent){
    const name = agent.parameters.name;
    const email = agent.parameters.email;
    const phone = agent.parameters.phone;
    const icfes = agent.parameters.icfes;
    const financiacion = agent.parameters.financiacion;
    const dinero = agent.parameters.dinero;
    const ciudad = agent.parameters.ciudad;
    const data = [{
      Name: name,
      Email: email,
      Phone: phone,
      Icfes: icfes,
      Financiacion: financiacion,
      Dinero: dinero,
      Ciudad: ciudad
    }];
    axios.post('https://sheet.best/api/sheets/33ece623-eb02-4978-8392-c8abb7dfc44a', data);

    agent.add(`Muchas gracias _${name}_ por buscar Con *Becabot*. \nEstas son algunas de las becas disponibles para ti. \nSe te enviarán a tu correo y te contactaremos por llamada \n \nResponda *Buscar de nuevo* si quieres volverlo a intentar`);

	return getSpreadsheetData().then(res => {
    	res.data.map(person => {
			agent.add(`*Nombre*: ${person.Nombre_Beca} \n Puntaje Mínimo de icfes: ${person.Puntaje_Minimo} \n Financiación: ${person.Financiacion} \n Ciudad: ${person.Ciudad} \n Universidad: ${person.Universidad}`);
        });
    });
  
  }
  
  


  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Solicitar Becas', saveDataHandler);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});