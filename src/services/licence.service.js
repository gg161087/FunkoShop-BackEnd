import licenceModel from '../models/licencesModel.js';

const getLicences = async () => {
    return await licenceModel.getLicences();
};

const getLicence = async (id) => {
    return await licenceModel.getLicence(id);
};

export default {
    getLicences,
    getLicence    
};
