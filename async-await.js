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


const getEmpleado = async (id) => {
    const _empleadoDB = empleados.find(x => x.id == id)
    if (!_empleadoDB)
        throw new Error(`No existe empleado com el id ${id}`)
    else
        return _empleadoDB
}

const getSalario = async ({ id, nombre }) => {
    const _salarioDB = salarios.find(x => x.id == id)
    if (!_salarioDB)
        throw new Error(`No se encontro salario para el empleado ${nombre}`)
    else
        return {
            nombre: nombre,
            salario: _salarioDB.salario,
            id: id
        }
}

const getInformacion = async (id) => {
    const _empleado = await getEmpleado(id)
    const _salario = await getSalario(_empleado)
    return `El salario de ${_salario.nombre} es ${_salario.salario}`
}

getInformacion(5).then(console.log).catch(error => console.log(error))
