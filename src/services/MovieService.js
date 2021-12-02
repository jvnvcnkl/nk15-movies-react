import axios from "axios";
class MovieService {
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:8000/api",
        })
    }

    getAll = async () => {
        const { data } = await this.client.get('/movies');
        console.log(data)
        return data
    }

}

export default new MovieService()