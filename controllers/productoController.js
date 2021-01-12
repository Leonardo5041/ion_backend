const Productos = require('../models/Productos');

//Agregar nuevos productos
exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);
    try {
        await producto.save();
        res.json(
            { mensaje: 'Producto Guardado Correctamente' })
    } catch (error) {
        console.log(error);
        next()
    }
}

//Obtener todos los productos
exports.obtenerProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find({}).populate('proveedor');
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener un producto ID
exports.obtenerProducto = async (req, res, next) => {
    const producto = await Productos.findById(req.params.idProducto).populate('proveedor');
    if (!producto) {
        res.json({
            mensaje: 'El producto no se encontro'
        })
        return next();
    }
    res.json(producto);
}

//Actualizar producto 
exports.actualizarProducto = async (req, res, next) => {
    try {
        //Construir nuevo producto
        let nuevoProducto = req.body;
        //Verificar si hay una nueva imagen
        if (req.file) {
            nuevoProducto.imagen = req.file.filename;
        } else {
            let productoAnterior = await Productos.findById(req.params.idProducto);
            nuevoProducto.imagen = productoAnterior.imagen
        }

        let producto = await Productos.findByIdAndUpdate({ _id: req.params.idProducto },
            nuevoProducto, {
            new: true
        });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un producto

exports.eliminarProducto = async (req, res, next) => {
    try {
        await Productos.findOneAndDelete({ _id: req.params.idProducto });
        res.json({
            mensaje: 'El producto fue eliminado correctamente'
        })
    } catch (error) {
        console.log(error)
        next();
    }
}