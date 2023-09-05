const fs = require('node:fs')

const registrar = (nombre,edad,tipo,color,enfermedad) =>{
    const nuevoRegistro =   {
         nombre: nombre, 
         edad: edad,
         tipo_de_animal: tipo,
         color_del_animal: color,
         enfermedad: enfermedad
        }
    let registros = []
    const citas = fs.readFileSync("citas.json", "utf8")
    registros = JSON.parse(citas)
    registros.push(nuevoRegistro)
    const registrosActualizados = JSON.stringify(registros);
    fs.writeFileSync("citas.json", registrosActualizados)
    console.log("se creo una nueva cita")
}

const leer = () =>{
    const citas = fs.readFileSync("citas.json", "utf8")
    if(citas == '[]'){console.log("No hay citas agendadas")}
    let registros = JSON.parse(citas)    
    registros.forEach((registro) =>{
        console.log(registro)
    })
}

module.exports = {registrar, leer}