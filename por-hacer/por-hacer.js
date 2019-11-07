const fs = require('fs');
const { ejemplo } = require('../config/yargs.js');

let listadoPorHacer = [];


const guardarBD = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./DB/Data.json`, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('Se credo el archivo data.');
        }

    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../DB/Data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListar = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBD();


    return porHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    let removido = listadoPorHacer.splice(index, 1);

    guardarBD();
    return removido;
}



module.exports = {
    crear,
    guardarBD,
    getListar,
    actualizar,
    borrar
}