//requires del proyecto
const { argv } = require('./config/yargs.js');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


console.log(argv);


let comando = argv._[0];
// let limite = argv.limite;
// let base = argv.base;





switch (comando) {
    case 'crear':
        console.log('Crear por hacer.');
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer.');
        let tareas = porHacer.getListar();

        for (let i = 0; i < tareas.length; i++) {
            console.log('============================='.green);
            console.log(tareas[i].descripcion);
            console.log(`Estado: ${tareas[i].completado}`);
            console.log('============================='.green);
        }

        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer.');
        let actualizado = porHacer.actualizar(argv.d, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borra una tarea por hacer.');
        let removido = porHacer.borrar(argv.d);
        console.log(`La tarea ${removido[0].descripcion} fue eliminada.`);
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}








// switch (comando) {
//     case 'listar':
//         console.log('Listar');
//         listarTabla(base, limite);
//         break;
//     case 'crear':
//         console.log('Crear');
//         crearArchivo(base, limite)
//             .then(archivo => console.log(`Archivo creado ${archivo}.`.green))
//             .catch(err => console.log(err));
//         break;
//     default:
//         console.log('Comando no reconocido');
//         break;
// }