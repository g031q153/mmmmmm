require('dotenv').config();
const typeorm = require('typeorm');
const EntitySchema = typeorm.EntitySchema;
const connection = typeorm.createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'postgres',
    database: 'mydb',
    logging: true,
    synchronize: false,
    entities: [
        new EntitySchema(require('./entity/users')),
        new EntitySchema(require('./entity/aerobic')),
        new EntitySchema(require('./entity/calorie_aerobic')),
        new EntitySchema(require('./entity/calorie_cuisine')),
        new EntitySchema(require('./entity/calorie_material')),
        new EntitySchema(require('./entity/calorie_muscle')),
        new EntitySchema(require('./entity/cuisine')),
        new EntitySchema(require('./entity/material')),
        new EntitySchema(require('./entity/muscle')),
    ],
});
module.exports = connection;