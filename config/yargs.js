const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer.'
}

const completado = {
    alias: 'c',
    defaul: true,
    desc: 'Marca como acompletado o pendiente la tarea.'
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un elemento por hacer.', {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv }