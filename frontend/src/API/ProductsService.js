import axios from "axios"

export default class PostService {
	static async getAll(type, limit){
			const link = `http://localhost:5000/api/products/${type}`
			const responce = await axios.get(link, {
				params: {
					limit: limit
				}
			})
		return responce.data
	}
}