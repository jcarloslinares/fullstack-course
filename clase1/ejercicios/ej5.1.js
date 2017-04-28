/*
* En un archivo ej5.json, guardar todas los nombres de los planetas que aparecen en la pelicula "Attack of the Clones"
* 
* 1) Obtener los ids de los planetas leyendo el json del archivo planets.json buscando por id=5
* 2) Obttener los planetas del archivo planets.json
* 3) Escribir el resultado en un nuevo archivo (ej5.json) con el siguiente formato:
* 
* ["planeta1", "planeta2", ...]
*
* Home work: relizar este ejercicio usando las distintas tecnicas vistas en clase
* Guardar las distintas versiones en archivos ej5.1.js, ej5.2.js, ej5.3.js, ej5.4.js
*/

const fs = require('fs')

// constantes con las ubicaciones de los archivos
const planetsFile = '../data/planets.json'; 
const filmsFile = '../data/films.json'; //buscar id=5
const outFile = './ej5.1.json';

//read the films file to found id planets 
fs.readFile(filmsFile,'utf-8', (err,data)=>{
    if(err){
        console.log(`Error leyendo el archivo ${filmsFile}`);
    }
    const films = JSON.parse(data);

    const movie =  films.find(elem => elem.id === '5')
    // console.log(1, movie)

    fs.readFile(planetsFile, 'utf-8', (err, data)=>{
        if(err){
            console.log(`Error leyendo el archivo ${planetsFile}`)
        }

        var planets = JSON.parse(data);

        const planetsMovie = planets.filter(planet => (movie.planets.indexOf(planet.id) >= 0 ))
        .map(planet => planet.name )

        //console.log(planetsMovie)
        fs.writeFile(outFile, JSON.stringify(planetsMovie), err => {
			// early return en caso de error
            if (err) {
                return console.log(`No se pudo escribir el archivo ${outFile}`);
            }
            console.log('The planets movies has been saved!');
        });
    })
})