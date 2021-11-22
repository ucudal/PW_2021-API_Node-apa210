var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jsonParser = bodyParser.json();

var app = express();
app.use(cookieParser());

app.use(cors({
  origin: '*'
}));

app.use(express.urlencoded({
  extended: true
}));



app.get('/experiencia-laboral',function(req,res){
  experiencia_laboral = {
    "experiencia-laboral":[
      {
        "empresa": "Evertec",
        "puesto": "SOFTWARE ENGINEER SENIOR",
        "descripcion": "Equipo Autorizador AAS - ATC Bolivia - OCA",
        "fechaInicio": "2021",
        "fechaFin": "Actualidad"
      },
      {
        "empresa": "Plexo",
        "puesto": "SOFTWARE ENGINEER SENIOR",
        "descripcion": "Analisis y desarrollo de software para Uruguay y Mexico",
        "fechaInicio": "2019",
        "fechaFin": "2021"
      },
      {
        "empresa": "UNIVERSIDAD CATÓLICA",
        "puesto": "DOCENTE",
        "descripcion": "Docente Programación 2, carrera Ing. en Sistemas/Lic. en Sistemas",
        "fechaInicio": "2014",
        "fechaFin": "2018"
      },
      {
        "empresa": "GSOFT",
        "puesto": "SOFTWARE DEVELOPER SENIOR",
        "descripcion": "Analisis y desarrollo de software para Uruguay y Brasil",
        "fechaInicio": "2009",
        "fechaFin": "2019"
      },
      {
        "empresa": "EVOLUCIÓN",
        "puesto": "SOFTWARE DEVELOPER",
        "descripcion": "Analisis y desarrollo de software",
        "fechaInicio": "2008",
        "fechaFin": "2019"
      },
      {
        "empresa": "SONEIRA & ASOCIADOS",
        "puesto": "FUNCIONARIO",
        "descripcion": "Mantenimiento del sistema y de la red. Trabajo con clientes en Call Center",
        "fechaInicio": "2008",
        "fechaFin": "2008"
      },
    ]
  }
  res.send(experiencia_laboral);
})

app.post('/enviar-formulario', jsonParser, function(req,res){
  console.log(req.body);
  var nombre_contacto = req.body.nombreContacto;
  if (!nombre_contacto) {
    return res.status(400).send("Falta el nombre de contacto");
  }
  res.cookie("PW_2021-CV_Contacto", nombre_contacto);
  res.send("API OK!");
});

app.post("/*", jsonParser, function(req, res) {
  res.status(404).send("404 - No fue encontrado");
});

app.get('/hola-mundo', function(req, res) {
  res.send("¡Hola mundo!")
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;