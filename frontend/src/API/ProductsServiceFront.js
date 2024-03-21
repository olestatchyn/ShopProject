export default class PostServiceFront {
	static async getAll(page="Піца", limit = 10){
		switch (page) {
			case "pizza":
				const pizza = [
					{
						_id: "1",
						name: "Vegan",
						description: "pizza, моцірелла",
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						_id: "2",
						name: "Мисливська",
						description: "pizza, моцірелла",
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						_id: "3",
						name: "Мисливська",
						description: "pizza, моцірелла",
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						_id: "4",
						name: "Vegan",
						description: "pizza, моцірелла",
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
						{
							_id: "5",
							name: "Vegan",
							description: "pizza, моцірелла",
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							_id: "6",
							name: "Vegan",
							description: "pizza, моцірелла",
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							_id: "7",
							name: "Vegan",
							description: "pizza, моцірелла",
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							_id: "8",
							name: "Vegan",
							description: "pizza, моцірелла",
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
		
				]
				return pizza
			case "salad":
				const salad = [
					{
						name: "Vegan",
						description: ["salad", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["salad", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["salad", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["salad", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
						{
							name: "Vegan",
							description: ["salad", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["salad", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["salad", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["salad", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
		
				]
				return salad
			case "drink":
				const drink = [
					{
						name: "Vegan",
						description: ["drink", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["drink", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["drink", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["drink", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
						{
							name: "Vegan",
							description: ["drink", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["drink", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["drink", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["drink", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
		
				]
				return drink
			case "other":
				const other = [
					{
						name: "Vegan",
						description: ["other", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["other", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["other", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
					{
						name: "Vegan",
						description: ["other", "моцірелла"],
						sizeAndPrice: {
							30: 100,
							40: 150
						},
					},
						{
							name: "Vegan",
							description: ["other", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["other", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["other", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
						{
							name: "Vegan",
							description: ["other", "моцірелла"],
							sizeAndPrice: {
								30: 100,
								40: 150
							},
						},
		
				]
				return other
		
			default:
				break;
		}
			
	}
}