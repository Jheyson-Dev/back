const tabla = 'ingreso';

module.exports = function (dbInjected) {

    let db = dbInjected;

    if(!db){
        db = require('../../db/mysql')
    }

    function getAll() {
        return db.obtenerTodos(tabla);
    }
    function getById(id) {
        return db.obtenerPorId(tabla, id);
    }
    function add(body) {
        return db.agregarConStock(tabla, body);
    }
    function update(id, newData) {
        return db.actualizarConStock(tabla, id, newData);
    }
    function remove(id) {
        return db.eliminar(tabla, id);
    }

    return{
        getAll,
        getById,
        add,
        update,
        remove
    }
    
}