const getUsuarioById = (id, callback) => {

    const usuario = {
        nombre: 'Esteban',
        id
    }

    if (id == 20)
        callback(`El usuário com id ${id} não existe`)
    else
        callback(null, usuario)
};

getUsuarioById(5, (err, user) => {

    if (err)
        return console.log(err)
    console.log('Usuario de Base de Datos', user)
})