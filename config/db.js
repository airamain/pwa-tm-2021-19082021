const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.STRING_SERVER_MONGO, {})
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;