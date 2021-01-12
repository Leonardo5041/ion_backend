const Proveedores = require('../models/Proveedores');

//agrega un nuevo proveedor
exports.nuevoProveedor = async (req, res) => {
    //Crear nuevo proveedor
    const proveedor = new Proveedores(req.body);
    try {
        //almacenar el registro
        await proveedor.save();
        res.json({
            mensaje: 'Se agrego correctamente el proveedor'
        })
    } catch (error) {
        console.log(error);
        next();
    }
}

// //Mostrar los proveedores 
exports.obtenerProveedores = async (req, res, next) => {

    try {
        const proveedores = await Proveedores.find({});
        res.json(proveedores);
    } catch (error) {
        console.log(error);
        next()
    }
}

// //Obtener un cliente mediante su ID
exports.obtenerProveedor = async (req, res, next) => {
    const proveedor = await Proveedores.findById(req.params.idProveedor);
    if (!proveedor) {
        res.json({ mensaje: 'El proveedor no existe' });
        next();
    }
    //Mostrar el cliente
    res.json(proveedor);
}

// //Actualizar proveedor mediante su ID
exports.actualizarProveedor = async (req, res, next) => {
    try {
        const proveedor = await Proveedores.findOneAndUpdate({ _id: req.params.idProveedor },
            req.body, {
            new: true
        });
        res.json(proveedor);
    } catch (error) {
        console.log(error);
        next();
    }
}

// //Eliminar un proveedor por su ID
exports.eliminarProveedor = async (req, res, next) => {
    try {
        await Proveedores.findOneAndRemove({ _id: req.params.idProveedor });
        res.json({ mensaje: 'El proveedor fue eliminado correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}