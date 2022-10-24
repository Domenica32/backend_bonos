const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonoSchema = new Schema({
    bonoFecha: { 
        type: Date, 
        required: true
    },
    bonoMotivo: {
        type: String, 
        required: true
    },
    bonoCantidad: {
        type: Number, 
        min: 0
    },
    usuario: {type: Schema.Types.ObjectId, ref:'Empleado'}
});

const Bono = mongoose.model('Bono', bonoSchema);
export default Bono;
