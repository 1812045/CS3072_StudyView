import axios from 'axios';

const MODELS_REST_API_URL = 'http://localhost:8080/models';

class ModelService {
    getModels(){
        return axios.get(MODELS_REST_API_URL);
    }
}

export default new ModelService()