export default class PostServiceFront {
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
				name: "Vegan",
				description: ["вершки", "моцірелла"],
				sizeAndPrice: {
					30: 100,
					40: 150
				},
			},
			{
				name: "Vegan",
				description: ["вершки", "моцірелла"],
				sizeAndPrice: {
					30: 100,
					40: 150
				},
			},
			{
				name: "Vegan",
				description: ["вершки", "моцірелла"],
				sizeAndPrice: {
					30: 100,
					40: 150
				},
			},
				{
					name: "Vegan",
					description: ["вершки", "моцірелла"],
					sizeAndPrice: {
						30: 100,
						40: 150
					},
				},
				{
					name: "Vegan",
					description: ["вершки", "моцірелла"],
					sizeAndPrice: {
						30: 100,
						40: 150
					},
				},
				{
					name: "Vegan",
					description: ["вершки", "моцірелла"],
					sizeAndPrice: {
						30: 100,
						40: 150
					},
				},
				{
					name: "Vegan",
					description: ["вершки", "моцірелла"],
					sizeAndPrice: {
						30: 100,
						40: 150
					},
				},
				{
					name: "Vegan",
					description: ["вершки", "моцірелла"],
					sizeAndPrice: {
						30: 100,
						40: 150
					},
				},
		]
		return pizza
	}
}