const express = require ("express");
const app = express ();
const url = require('url');
const path = require ('path');
const port = 3000;

app.get('/fibonacci',(req, res) => {
    fibonacci = [];
    let numero = parseInt(req.query.numero);
     parImpar = (numero) => {
        if(numero % 2 === 0) {
          return "par";
        }
        else {
          return "impar";
        }
      }
    if ( parImpar(numero) === "par" ) {
        let numero1= 0,
        numero2= 1,
        resultado = numero1+numero2;
    for (let i=0; i< 20 ;i++){
        resultado = numero1 + numero2;
        numero1 = numero2;
        numero2 = resultado;

        fibonacci.push(resultado);
    }
    }else
    {
        let numero1= 0,
        numero2= 1,
        resultado = numero1+numero2;
    for (let i=0; i< 10 ;i++){
        resultado = numero1 + numero2;
        numero1 = numero2;
        numero2 = resultado;
        fibonacci.push(resultado);
    }
    }
    res.json(`La respuesta es : ${fibonacci}`);
})

app.listen(port, ()=> {
    console.log(`Escucha de el puerto 3000 ${port}!`)
}
)
