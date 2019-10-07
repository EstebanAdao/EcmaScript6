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

const getEmpleado = (id, callback) => {

    const _empleadoDB = empleados.find(x => x.id == id)

    if (!_empleadoDB)
        callback(`No existe empleado com el id ${id}`)
    else
        callback(null, _empleadoDB)
}

const getSalario = ({ id, nombre }, callback) => {
    const _salarioDB = salarios.find(x => x.id == id)
    // console.log('_salarioDB', _salarioDB)
    if (!_salarioDB)
        callback(`No se encontro salario para el empleado ${nombre}`)
    else
        callback(null, {
            nombre: nombre,
            salario: _salarioDB.salario,
            id: id
        })
}

getEmpleado(2, (erro, empleado) => {
    if (erro)
        return console.log('1', erro)

    getSalario(empleado, (erro, salario) => {
        if (erro)
            return console.log(erro)
        console.log(`El salario de ${salario.nombre} es ${salario.salario}`)
    })
})