'use strict';

const serverless = require('serverless-http');
const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const USERS_TABLE = process.env.USERS_TABLE;

const app = express();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ string: false }))


app.get('/user', (req, res) => {
  console.log('get');

  const params = {};
  params.TableName = USERS_TABLE;
  // params.Key = { userId: '1234' };
  console.log('putUser -> params:  ', params);
  dynamoDB.scan(params, (error, result) =>{

    if (error) {
      console.log('putUser -> error:  ', error);
      res.status(400).json({
        error: 'error'
      });

    } else {

      console.log('prueba');
      const {Items} = result;
      res.json({
        success:'true',
        users:Items
      });
    }

  })

});

app.post('/user', (req, res) => {
  const { userId, name } = req.body;

  res.json({ userId, name });
  console.log('get');
});

module.exports.generic = serverless(app);
