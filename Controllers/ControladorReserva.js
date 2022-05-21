
export class ControladorReserva {
    
    constructor(){}

    buscarTodas(request, response){

        let datos = [{nombre:'jhon', edad: 32},{nombre: 'laura', edad: 28}]

        try { //todo sale bien

            response.status(200).json({
                mensaje:'exito buscando los datos de reserva',
                data: datos,
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos de reserva'+ error,
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
                mensaje:'exito buscando los datos de reserva'+ id,
                data: datos,
                estado:true
            })

        } catch (error) {
            
            response.status(400).json({
                mensaje:'Error buscando los datos de reserva'+ error,
                data: [],
                estado:false
            })
        }
    }

    registrar(request, response){
        let datosPeticion=request.body

        try {

            response.status(200).json({
                mensaje: "exito agregando la reservacion",
                data: datosPeticion,
                estado : true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "fallamos agregando la reserva",
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
                mensaje: "exito editando datos de reserva",
                data: datosPeticion,
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos editando reserva",
                data: [],
                estado : false

            })

        }
    }

    eliminar(request, response){

        let id = request.params.id
        
        try {

            response.status(200).json({
                mensaje: "exito eliminando reserva",
                data: [],
                estado : true

            })

        } catch (error) {
            
            response.status(400).json({
                mensaje: "fallamos eliminando reservacion ",
                data: [],
                estado : false

            })

        }

    }

}