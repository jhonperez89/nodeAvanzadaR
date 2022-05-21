// controlador
//1. recibir peticiones
//2. ejecutar logica de negocio
// 3. llamar a la capa de servicios
// 4. enviar las respuestas al cliente


export class ControladorHabitacion {
    
    constructor(){}

    buscarTodas(request, response){

        let datos = [{nombre:'jhon', edad: 32},{nombre: 'laura', edad: 28}]

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos',
                data: datos,
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos'+ error,
                data: [],
                estado:false
            })
        }
            
    }


    buscarPorId(request, response){

        let datos = [{nombre:'jhon', edad: 32}]
        let id = request.params.id
        console.log(id)

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos'+ id,
                data: datos,
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos'+ error,
                data: [],
                estado:false
            })
        }
    }

    registrar(request, response){
        let datosPeticion=request.body

        try {

            response.status(200).json({
                mensaje: "exito agregando la habitacion",
                data: datosPeticion,
                estado : true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "fallamos agregando habitacion",
                data: [],
                estado : false
            })   
        }
    }

    editar(request, response){
        let id = request.params.id
        let datosPeticion = request.body

        try {

            response.status(200).json({
                mensaje: "exito editando la habitacion",
                data: datosPeticion,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos editando habitacion",
                data: [],
                estado : false

            })

        }
    }

    eliminar(request, response){

        let id = request.params.id
        
        try {

            response.status(200).json({
                mensaje: "exito eliminando la habitacion",
                data: [],
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos eliminando habitacion",
                data: [],
                estado : false

            })

        }

    }

}