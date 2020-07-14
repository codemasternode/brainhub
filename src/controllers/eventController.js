import Person from '../models/person'

export async function registerNewPerson(req, res) {
    try {
        const pereson = await Person.create({ ...req.body })
        return res.send({pereson})
    } catch (err) {
        const errorResponse = {}
        for(let key in err.errors) {
            //ValidationError handler
            if(err.errors[key].properties) {
                errorResponse[key] = err.errors[key].properties.message
            } 
            //CastError handler
            else {
                errorResponse[key] = err.errors[key].toString().split(":")[1]
            }
        }
        return res.status(400).send({errorResponse})
    }
}