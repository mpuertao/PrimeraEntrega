let curso = [{
    id : 1,
    nombre : 'DevOps',
    duracion : '40 horas',
    valor : 1200000
},
{
    id : 2,
    nombre : 'Automatizacion de Pruebas y Procesos',
    duracion : '30 horas',
    valor : 800000
},
{
    id : 3,
    nombre : 'Cloud',
    duracion : '35 horas',
    valor : 1000000
}];

let consultaCurso = (id) => {
    let resultado = curso.find( curso => curso.id ==id);
    return (typeof resultado !== "undefined") ? resultado : " No encontró el curso";
}

let listaCurso = () => {
    for (var i=0; i < curso.length; i += 1) {
        datosCurso(i, curso[i].id, curso[i].nombre, curso[i].duracion, curso[i].valor)
    }
}

let datosCurso = (indice, id, nombre, duracion, valor) => {
    setTimeout(function() {
        console.log("El curso '" + nombre + "' con id '" + id + "' tiene una duracion de '" + duracion + "'\n" +
        " y tiene un valor de '" +valor+ "'")
    })
}

module.exports = {
    consultaCurso,
    listaCurso,
    datosCurso
}