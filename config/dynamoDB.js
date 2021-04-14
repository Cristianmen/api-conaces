
const AWS = require('aws-sdk');
const USERS_TABLE = process.env.USERS_TABLE;

const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.consultaAdmin = (req, res, next) => {

    const params = {};
    params.TableName = USERS_TABLE;

    try {
        dynamoDB.scan(params, (error, result) => {

            if (error) {
                console.log('putUser -> error:  ', error);
                res.status(400).json({
                    error: 'error'
                });

            } else {

                console.log('prueba');
                const { Items } = result;
                res.json({
                    success: 'true',
                    users: Items
                });
            }

        })
    } catch (e) {

        res.status(400).json({
            error: 'error'
        });

    }
};
