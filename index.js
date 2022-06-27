console.log('hello')
const url = 'https://api.datos.gob.mx/v1/bases-de-datos-de-concesiones-mineras'

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))