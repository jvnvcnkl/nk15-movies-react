import axios from "axios";
class MovieService {
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:8000/api",
        })
    }

    getAll = async (title = '') => {
        const query = title ? `?title=${title}` : ''
        const { data } = await this.client.get(`/movies${query}`)
        return data;
    }


}

export default new MovieService()