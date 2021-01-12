const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proveedoresSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    rfc: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    telefono: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Proveedores', proveedoresSchema);