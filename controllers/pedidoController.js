const Pedidos = require('../models/Pedidos');


exports.nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({ mensaje: 'Pedido Guardado correctamente' })
    } catch (error) {
        console.log(error);
        next();
    }
}

//Mostrar todos los pedidos 
exports.mostrarPedidos = async (req, res, next) => {
    try {
        //El populate sirve para obtener los datos del cliente y los productos con toda su informacion
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}
//Obtener un pedido o venta mediante el id
exports.mostrarPedido = async (req, res, next) => {
    const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
        path: 'pedido.producto',
        model: 'Productos'
    });
    if (!pedido) {
        res.json({
            mensaje: 'El pedido no se encontro'
        })
        return next();
    }
    res.json(pedido);
}

//Actualizar un pedido mediante su id
exports.actualizarPedido = async (req, res, next) => {
    try {
        let pedido = await Pedidos.findOneAndUpdate({ _id: req.params.idPedido }, req.body, {
            new: true
        }).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedido);
    } catch (error) {
        console.log(error);
    }
}


//Eliminar un pedido
exports.eliminarPedido = async (req, res, next) => {
    try {
        await Pedidos.findOneAndDelete({ _id: req.params.idPedido });
        res.json({
            mensaje: 'El pedido fue eliminado correctamente'
        })
    } catch (error) {
        console.log(error);
        next()
    }
}
