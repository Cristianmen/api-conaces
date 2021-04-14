'use strict';

const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const DynamoBDClas = require('./dynamoDB');
const app = express();

app.use(bodyParser.json({ string: false }))

app.get('/user', async (req, res) => {
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

app.post('/login', async (req, res) => {
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

module.exports.generic = serverless(app);

