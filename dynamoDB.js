'use strict';

const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();


//tablas de dynamo
const USERS_TABLE = process.env.USERS_TABLE;
const REPOS_TABLE = process.env.REPOS_TABLE;
const EVENT_TABLE = process.env.EVENT_TABLE;
const FORO_TABLE = process.env.FORO_TABLE;
const PREG_TABLE = process.env.PREG_TABLE;

class DynamoBDClas {

    constructor(){ }

    async getUser() {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = USERS_TABLE;
                console.log('getUser -> params:  ', params);
                dynamoDB.scan(params, (error, result) => {
                    if (error) {
                        console.log('getUser -> error:  ', error);
                        reject(error);
                    } else {
                        const { Items } = result;
                        console.log('Items', Items);
                        resolved(Items);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async logintUser(key) {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = USERS_TABLE;
                params.Key = key;
                console.log('getUser -> params:  ', params);
                dynamoDB.get(params, (error, result) => {
                    if (error) {
                        console.log('getUser -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('result', result);
                        const { Item } = result;
                        console.log('Items', Item);
                        resolved(Item);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getUser() {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = USERS_TABLE;
                console.log('getUser -> params:  ', params);
                dynamoDB.scan(params, (error, result) => {
                    if (error) {
                        console.log('getUser -> error:  ', error);
                        reject(error);
                    } else {
                        const { Items } = result;
                        console.log('Items', Items);
                        resolved(Items);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async putUser(item) {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = USERS_TABLE;
                params.Item = item
                console.log('getUser -> params:  ', params);
                dynamoDB.put(params, (error, result) => {
                    if (error) {
                        console.log('putItem -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('putItem -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getRepo() {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = REPOS_TABLE;
                console.log('getUser -> params:  ', params);
                dynamoDB.scan(params, (error, result) => {
                    if (error) {
                        console.log('getUser -> error:  ', error);
                        reject(error);
                    } else {
                        const { Items } = result;
                        console.log('Items', Items);
                        resolved(Items);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async putRepo(item) {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = REPOS_TABLE;
                params.Item = item
                console.log('getUser -> params:  ', params);
                dynamoDB.put(params, (error, result) => {
                    if (error) {
                        console.log('putItem -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('putItem -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getEvent() {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = EVENT_TABLE;
                console.log('getEvento -> params:  ', params);
                dynamoDB.scan(params, (error, result) => {
                    if (error) {
                        console.log('getEvento-> error:  ', error);
                        reject(error);
                    } else {
                        const { Items } = result;
                        console.log('Items', Items);
                        resolved(Items);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async putEvent(item) {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = EVENT_TABLE;
                params.Item = item
                console.log('getEvento -> params:  ', params);
                dynamoDB.put(params, (error, result) => {
                    if (error) {
                        console.log('getEvento -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('getEvento -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getForo() {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = FORO_TABLE;
                console.log('getForo -> params:  ', params);
                dynamoDB.scan(params, (error, result) => {
                    if (error) {
                        console.log('getForo-> error:  ', error);
                        reject(error);
                    } else {
                        const { Items } = result;
                        console.log('Items', Items);
                        resolved(Items);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async putForo(item) {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = FORO_TABLE;
                params.Item = item
                console.log('getForo -> params:  ', params);
                dynamoDB.put(params, (error, result) => {
                    if (error) {
                        console.log('putItem -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('putItem -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getPreg() {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = PREG_TABLE;
                console.log('getPreg -> params:  ', params);
                dynamoDB.scan(params, (error, result) => {
                    if (error) {
                        console.log('getPreg -> error:  ', error);
                        reject(error);
                    } else {
                        const { Items } = result;
                        console.log('Items', Items);
                        resolved(Items);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async putPreg(item) {
        return new Promise(async (resolved, reject) => {
            try {
                const params = {};
                params.TableName = PREG_TABLE;
                params.Item = item
                console.log('getPreg -> params:  ', params);
                dynamoDB.put(params, (error, result) => {
                    if (error) {
                        console.log('putItem -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('putItem -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async deleteEvent(item) {

        return  new Promise(async(resolved, reject) => {
            try {
               
                const evento= EVENT_TABLE
            
                const eventId= item
              
                const params = {
                    TableName:evento,
                    Key:{
                        "eventId":eventId
                    },
                }

                dynamoDB.delete(params, (error, result) => {
                    if (error) {
                        console.log('deleteEvento -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('deleteEvento -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }


    async deletePreg(item) {

        return new Promise(async(resolved, reject) => {
            try {

                const pregunta = PREG_TABLE
                const preguntasId = item
                const params = {
                    TableName: pregunta,
                    Key: {
                        "preguntasId": preguntasId
                    },
                }

                dynamoDB.delete(params, (error, result) => {
                    if (error) {
                        console.log('deleteEvento -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('deleteEvento -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }
    
    async deleteRepo(item) {

        return new Promise(async(resolved, reject) => {
            try {

                const repositorio = REPOS_TABLE
                const repoId = item
                const params = {
                    TableName: repositorio,
                    Key: {
                        "repoId": repoId
                    },
                }

                dynamoDB.delete(params, (error, result) => {
                    if (error) {
                        console.log('deleteEvento -> error:  ', error);
                        reject(error);
                    } else {
                        console.log('deleteEvento -> result:  ', result);
                        resolved(result);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

}

module.exports = DynamoBDClas;