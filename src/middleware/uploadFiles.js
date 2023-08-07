import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import licenceService from '../services/licenceService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {                       
        const licences = await licenceService.getLicences();        
        const licence = licences.data[Number(req.body.licence) -1];
        const dirLicence = licence.licence_image.split('/')[0];                       
        cb(null, resolve(__dirname, `../../public/img/${dirLicence}/`));
    },
    filename: (req, file, cb) => {        
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

export const uplodadFile = multer({storage});