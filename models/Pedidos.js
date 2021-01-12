const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes'
    },
    //un pedido puede tener uno o varios productos => Array de productos
    pedido: [
        {
            producto: {
                type: Schema.ObjectId,
                ref: 'Productos'
            },
            cantidad: Number
        }
    ],
    total: {
        type: Number
    },
    descuento:{
        type:Number
    }

});

module.exports = mongoose.model('Pedidos', pedidosSchema);