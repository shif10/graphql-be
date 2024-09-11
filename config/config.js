// config/config.js
module.exports = {
    development: {
        username: process.env.DB_USERNAME || 'your_username',
        password: process.env.DB_PASSWORD || 'your_password',
        database: 'your_database',
        host: 'localhost',
        dialect: 'sqlite',
        logging: false
    },
    test: {
        username: process.env.DB_USERNAME || 'your_username',
        password: process.env.DB_PASSWORD || 'your_password',
        database: 'test_database',
        host: 'localhost',
        dialect: 'sqlite',
        logging: false
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        logging: false
    }
};
