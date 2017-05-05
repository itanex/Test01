import * as express from 'express';

import Autos from '../models/auto';

let router = express.Router();

router.get('/',  (request, response)=> {
    Autos.find().then((autos) => {
        response.status(200).json(autos);
    })
    .catch((err) => {
        console.log(err);
        response.status(500).json(err);
    })
});

export default router;