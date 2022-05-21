import mongoose  from "mongoose";
//esquema
const Schema = mongoose.Schema; //esquema de datos (que datos tiene mi modelo)

//creo mi propio esquema de datos
const Reservas = new Schema({
    IdCliente:{
        type:String,
        required:true,
    },
    TargetaCretito:{
        type:String,
        required:true,
    },
    
    IdHabitacion:{
        type:String,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },

    fechaFinal:{
        type:Date,
        required:true
    },
    Costo:{
        type:Number,
        required:true
    }

    
        
})

// se envia el modelo de datos
export const modeloReserva = mongoose.model('Reservas ', Reservas );