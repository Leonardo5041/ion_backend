const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productoController');
const pedidoController = require('../controllers/pedidoController');
const proveedorController = require('../controllers/proveedorController');

module.exports = function () {
    //Agregar nuevos clientes via Post
    router.post('/clientes', clienteController.nuevoCliente);

    //Obtener los clientes
    router.get('/clientes', clienteController.obtenerClientes);

    //Obtener un cliente por id
    router.get('/clientes/:idCliente', clienteController.obtenerCliente);

    //Actualizar cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    //Eliminar un cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    //**********************************************************PROVEEDORES********************************************** */
    //Agregar nuevos proveedores via Post
    router.post('/proveedores', proveedorController.nuevoProveedor);

    // //Obtener los proveedores
    router.get('/proveedores', proveedorController.obtenerProveedores);

    // //Obtener un proveedor por id
    router.get('/proveedores/:idProveedor', proveedorController.obtenerProveedor);

    // //Actualizar proveedor
    router.put('/proveedores/:idProveedor', proveedorController.actualizarProveedor);

    // //Eliminar un proveedor
    router.delete('/proveedores/:idProveedor', proveedorController.eliminarProveedor);

    /***********************************************************PRODUCTOS**************************************************** */


    //Agregar nuevos productos via Post
    router.post('/productos', productoController.nuevoProducto);

    //Mostrar los productos
    router.get('/productos', productoController.obtenerProductos);

    //Obtener un producto mediante ID
    router.get('/productos/:idProducto', productoController.obtenerProducto);

    //Actualizar producto mediante su ID
    router.put('/productos/:idProducto', productoController.actualizarProducto);

    //Eliminar Productos
    router.delete('/productos/:idProducto', productoController.eliminarProducto);


    /***************************************************PEDIDOS O VENTAS********************************* */

    router.post('/pedidos', pedidoController.nuevoPedido);

    //mostrar todos los pedidos
    router.get('/pedidos', pedidoController.mostrarPedidos);

    //Mostrar un pedido por su ID
    router.get('/pedidos/:idPedido', pedidoController.mostrarPedido);

    //Actualizar un pedido 
    router.put('/pedidos/:idPedido', pedidoController.actualizarPedido)

    //Eliminar un pedido por su ID
    router.delete('/pedidos/:idPedido', pedidoController.eliminarPedido);

    return router;
}