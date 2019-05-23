const {consultaCurso, listaCurso, datosCurso} = require ('./datos');
const fs = require('fs');

const datosPostulante = {
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    },
    curso: {
        demand: true,
        alias: 'i'
    }
}

const argv = require('yargs')
            .command('inscribir', 'proceso de inscripcion', datosPostulante)
            .argv;

           if (typeof argv.nombre == 'undefined' || typeof argv.cedula == 'undefined' || typeof argv.curso == 'undefined') {
            listaCurso();
           }
           else {
               console.log('El resultado de la busqueda es ' +consultaCurso(argv.i).nombre)
               if(consultaCurso(argv.i) != 'No encontró el curso') {
                   let crearArchivo = () => {
                       text = ' Numero de Identificacion: ' + argv.c + '\n' +
                            '   Nombre: ' + argv.n + '\n' +
                            '   Id del curso ' + consultaCurso(argv.i).id + '\n' +
                            '   Nombre del curso ' + consultaCurso(argv.i).nombre + '\n' +
                            '   Duracion del curso ' + consultaCurso(argv.i).duracion + '\n' +
                            '   Aporte en $ ' + consultaCurso(argv.i).valor;

                        fs.writeFile('inscripcion.txt', text, (err) => {
                            if(err) throw (err);
                            console.log('Se generó archivo correctamente');
                        });  
                   }
                   crearArchivo();
               }
           }