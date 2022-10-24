const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema empleado
const empleadoSchema = new Schema({
    empleadoNombre: { 
        type: String, 
        required: true
    },
    empleadoApellido: { 
        type: String, 
        required: true
    }
});

//Exportar modelo
const Empleado = mongoose.model('Empleado', empleadoSchema);
export default Empleado;
