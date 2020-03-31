import axios from 'axios'
const baseUrl = "https://localhost:3001/document"

class DocumentService{
    static postApi(url,data){
        return axios.post(baseUrl + url,data);
    }

    static getApi(url){
        return axios.get(baseUrl + url);
    }

    static deleteApi(url){
        return axios.delete(baseUrl + url);
    }
    
}

export default DocumentService