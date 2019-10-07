const empleados = [{
    id: 1,
    nombre: 'Esteban'
},
{
    id: 2,
    nombre: 'Karly'
},
{
    id: 3,
    nombre: 'Juliana'
}]

const salarios = [{
    id: 1,
    salario: 200000
},
{
    id: 2,
    salario: 10000
}]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const _empleadoDB = empleados.find(x => x.id == id)
        if (!_empleadoDB)
            reject(`No existe empleado com el id ${id}`)
        else
            resolve(_empleadoDB)
    })
}

const getSalario = ({ id, nombre }) => {
    return new Promise((resolve, reject) => {
        const _salarioDB = salarios.find(x => x.id == id)
        if (!_salarioDB)
            reject(`No se encontro salario para el empleado ${nombre}`)
        else
            resolve({
                nombre: nombre,
                salario: _salarioDB.salario,
                id: id
            })
    })
}


// getEmpleado(5).
//     then((empleado) => {
//         // getSalario(empleado).
//         //     then((salario) => {
//         //         console.log(salario)
//         //     })
//         // console.log(`El empleado es ${empleado.nombre}`)

//         return getSalario(empleado)
//     }).then((salario) => {
//         console.log(`El salario de ${salario.nombre} es ${salario.salario}`)
//     })
//     .catch(error => {
//         console.log(error)
//     })

getEmpleado(5)
    .then(getSalario)
    .then(console.log)
    .catch(err => console.log(err))