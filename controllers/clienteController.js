const Clientes = require('../models/Clientes');

//agrega un nuevo cliente
exports.nuevoCliente = async (req, res) => {
    //Crear nuevo cliente
    const cliente = new Clientes(req.body);
    try {
        //almacenar el registro
        await cliente.save();
        res.json({
            mensaje: 'Se agrego correctamente el cliente'
        })
    } catch (error) {
        console.log(error);
        next();
    }
}

//Mostrar los clientes 
exports.obtenerClientes = async (req, res, next) => {

    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next()
    }
}

//Obtener un cliente mediante su ID
exports.obtenerCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);
    if (!cliente) {
        res.json({ mensaje: 'El cliente no existe' });
        next();
    }
    //Mostrar el cliente
    res.json(cliente);
}

//Actualizar cliente mediante su ID
exports.actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente },
            req.body, {
            new: true
        });
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un cliente por su ID
exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndRemove({ _id: req.params.idCliente });
        res.json({ mensaje: 'El cliente fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}