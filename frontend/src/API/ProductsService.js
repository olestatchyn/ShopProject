import axios from "axios"

export default class PostService {
	static async getAll(limit = 10, page="Піца"){
			const pizza = [
			{
				name: "Vegan",
				description: ["вершки", "моцірелла"],
				sizeAndPrice: {
					30: 100,
					40: 150
				},
			},
			{
				name: "",
				description: ["", ""],
				sizeAndPrice: {
					30: 100,
					40: 150
				},
			},
			{
				name: "",
				description: ["", ""],
				sizeAndPrice: {
					30: 100,
					40: 150
				},
			},
		]
			const responce = await axios.get("https://jsonplaceholder.typicode.com/posts", {
				params: { 
					_limit: limit, 
					_page: page
				}
			})
		return pizza
	}
}