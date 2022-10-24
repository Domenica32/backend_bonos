import express from 'express'
const router = express.Router();
//Importar el modelo 
import Bono from '../models/bono'

router.get('/bono', async (req, res) => {
    try {
        const bonoDB = await Bono.find().populate({path:'usuario', select:'empleadoNombre'});
        console.log(bonoDB);
        return(res.json(bonoDB));
        res.json(bonoDB);
        
    } catch (error) {
        return res.status(500);
    }
});

router.get('/bono/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const bonoDB = await Bono.findById(_id).populate({path:'usuario', select:'empleadoNombre'});
        res.json(bonoDB);
    } catch (error) {
        return res.status(500);
    }
});

//ruta para obtener query con las fechas deseadas
router.post('/bono/fecha/',async (req,res)=>{
    const body ={

        fechaInit : req.body.fechaInit,
        fechaFin : req.body.fechaFin
        }
    try{
        const bonoDB = await Bono.find(({"bonoFecha": {"$gte": new Date(body.fechaInit), "$lte": new Date(body.fechaFin)}})).populate({path:'usuario', select:'empleadoNombre'});
        res.json(bonoDB);
    } catch(e){
        return res.status(500).json({
            message:'Error al obtener',
            e
        })
    }
})
//ultima version

router.post('/nuevoBono',async (req, res) => {
    const body = {
        bonoFecha: new Date(req.body.bonoFecha),
        bonoMotivo: req.body.bonoMotivo,
        bonoCantidad: req.body.bonoCantidad,
        usuario: req.body.usuario
    }
    try{
        const bonoDB = await Bono.create(body);
        res.status(200).json(bonoDB);
    }catch (error){
        return res.status(500);
    }
});

module.exports = router;