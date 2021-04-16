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
    

}

module.exports = DynamoBDClas;