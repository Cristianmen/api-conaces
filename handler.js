'use strict';
const { body } = require("express-validator");
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const DynamoBDClas = require('./dynamoDB');
const cors = require('cors')
const app = express();
const validar = require('./controll/contr')

app.use(bodyParser.json({ string: false }))

app.get('/user', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const users = await userDB.getUser();
  console.log('getUser -> uu:  ', users);
  //validar usaurio
  if (users) {
    res.json({
      success: 'true',
      users: users
    });
  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.post('/login', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  console.log('req: ', req);
  const { userId, name, pass } = req.body;
  const data = {
    userId: userId
  }
  console.log('data: ', data);
  const response = await userDB.logintUser(data);
  console.log('data: ', data);
  if (response) {

    if (response.userId === userId && response.pass === pass) {
      res.json({
        success: 'true',
        users: response
      });
    } else {

      res.status(404).json({
        error: 'error'
      });

    }

  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.post('/user', async (req, res) => {
  const userDB = new DynamoBDClas();
  console.log('req: ', req);
  const { userId, name, pass } = req.body;
  const data = {
    userId: userId,
    name: name,
    pass: pass
  }
  console.log('data: ', data);
  const response = await userDB.putUser(data);

  if (response) {
    res.json({
      success: 'true',
      users: response
    });
  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.get('/repositorios', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const users = await userDB.getRepo();
  console.log('getUser -> uu:  ', users);
  //validar usaurio
  if (users) {
    res.json({
      success: 'true',
      users: users
    });
  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.post('/repositorios', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const cont = new validar();
  console.log('req: ', req);
  console.log("....")

  const { repoId, content } = req.body;
  const data = {
    repoId: repoId,
    content: content
  }
  console.log('data: ', data.content);

  if (cont.exprecionNumeroOLetras(data.repoId)===true && cont.exprecionNumeroOLetras(data.content)===true) {
    const response = await userDB.putRepo(data);

    if (response) {
      res.json({
        success: 'true',
        users: response
      });
    } else {
      res.status(400).json({
        error: 'error'
      });
    }
  } else {
    res.status(400).json({
      error: 'error'
    });
  }

});

app.get('/evento', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const users = await userDB.getEvent();
  console.log('getEvento -> :  ', users);
  //validar usaurio
  if (users) {
    res.json({
      success: 'true',
      users: users
    });
  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.post('/evento', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const cont = new validar();
  const { eventId, nombre, fecha, hora, tema, descripcion } = req.body;
  const data = {
    eventId: eventId,
    nombre: nombre,
    fecha: fecha,
    hora: hora,
    tema: tema,
    descripcion: descripcion
  }
  console.log('getevento -> :  ');


  if (cont.exprecionLetras(data.nombre)===true && cont.exprecionFecha(data.fecha)===true && 
  cont.exprecionHora(data.hora)===true && cont.exprecionNumeroOLetras(data.tema)===true && cont.exprecionLetras(data.descripcion)===true &&
  cont.exprecionNumeroOLetras(data.eventId)===true ) {

    const responde = await userDB.putEvent(data);
    console.log(responde);
    if (responde) {
      res.status({
        success: 'true',
        users: responde
      })
    } else {
      res.status(400).json({
        error: 'error'
      })
    }

  } else {
    res.status(400).json({
      error: 'error'
    })
  }


})

app.get('/foro', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const users = await userDB.getForo()
  console.log('getUser -> uu:  ', users);
  //validar usaurio
  if (users) {
    res.json({
      success: 'true',
      users: users
    });
  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.post('/foro', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const cont = new validar();
  console.log('req: ', req);
  console.log("....")

  const { foroId,tema,descripcion } = req.body;
  const data = {
    foroId: foroId,
    tema: tema,
    descripcion : descripcion 
  }
  console.log('data: ', data.tema);

  if (cont.exprecionNumeroOLetras(data.foroId) && cont.exprecionNumeroOLetras(data.descripcion) && cont.exprecionNumeroOLetras(data.tema)===true) {
    const response = await userDB.putForo(data);

    if (response) {
      res.json({
        success: 'true',
        users: response
      });
    } else {
      res.status(400).json({
        error: 'error'
      });
    }
  } else {
    res.status(400).json({
      error: 'error'
    });
  }

});

app.get('/preguntas', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const users = await userDB.getPreg();
  console.log('getUser -> uu:  ', users);
  //validar usaurio
  if (users) {
    res.json({
      success: 'true',
      users: users
    });
  } else {
    res.status(400).json({
      error: 'error'
    });
  }
});

app.post('/preguntas', cors(), async (req, res) => {
  const userDB = new DynamoBDClas();
  const cont = new validar();
  console.log('req: ', req);
  console.log("....")

  const { preguntasId, descripcion } = req.body;
  const data = {
    preguntasId: preguntasId,
    descripcion: descripcion
  }
  console.log('data: ', data.descripcion);

  if (cont.exprecionNumeroOLetras(data.preguntasId) && cont.exprecionNumeroOLetras(data.descripcion)) {
    const response = await userDB.putPreg(data);

    if (response) {
      res.json({
        success: 'true',
        users: response
      });
    } else {
      res.status(400).json({
        error: 'error'
      });
    }
  } else {
    res.status(400).json({
      error: 'error'
    });
  }

});

app.delete('/evento', cors(), async(req, res) => {
  const userDB = new DynamoBDClas();
  console.log('req: ', req);
  console.log("....")

  const { eventId } = req.body;
  const data = {
      eventId: eventId
  }
  console.log('data: ', data.eventId);

  const response = await userDB.deleteEvent(data.eventId);

  if (response) {
      res.json({
          success: 'true',
          users: response
      });
  } else {
      res.status(400).json({
        error : 'error'
      })
    }
  });

  app.delete('/preguntas', cors(), async(req, res) => {
    const userDB = new DynamoBDClas();
    console.log('req: ', req);
    console.log("....")
  
    const { preguntasId } = req.body;
    const data = {
      preguntasId: preguntasId
    }
    console.log('data: ', data.preguntasId);
  
    const response = await userDB.deletePreg(data.preguntasId);
  
    if (response) {
        res.json({
            success: 'true',
            users: response
        });
    } else {
        res.status(400).json({
          error : 'error'
        })
      }
    });

    app.delete('/repositorios', cors(), async(req, res) => {
      const userDB = new DynamoBDClas();
      console.log('req: ', req);
      console.log("....")
    
      const { repoId } = req.body;
      const data = {
        repoId: repoId
      }
      console.log('data: ', data.repoId);
    
      const response = await userDB.deleteRepo(data.repoId);
    
      if (response) {
          res.json({
              success: 'true',
              users: response
          });
      } else {
          res.status(400).json({
            error : 'error'
          })
        }
      });
  

  
module.exports.generic = serverless(app);

