export default class PostServiceFront {
	static async getAll(limit = 10, page="Піца"){
		
			const pizza = [
        {
          _id: "65fac66e819ab1fc70ee9dc4",
          name: "Vegan",
          description: "Classic tomato sauce",
          sizeAndPrice: {
            30: 10,
            40: 12,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dc5",
          name: "Vegan",
          description: "Tomato sauce,",
          sizeAndPrice: {
            30: 12,
            40: 15,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dc6",
          name: "Vegan",
          description: "Assorted veggies,",
          sizeAndPrice: {
            30: 11,
            40: 14,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dc7",
          name: "Vegan",
          description: "Tomato sauce,",
          sizeAndPrice: {
            30: 13,
            40: 16,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dc8",
          name: "Vegan",
          description:
            "BBQ sauce, ",
          sizeAndPrice: {
            30: 14,
            40: 17,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dc9",
          name: "Vegan",
          description:
            "Tomato sauce, ",
          sizeAndPrice: {
            30: 15,
            40: 18,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dca",
          name: "Vegan",
          description:
            "Tomato sauce, ",
          sizeAndPrice: {
            30: 11,
            40: 14,
          },
        },
        {
          _id: "65fac66e819ab1fc70ee9dcb",
          name: "Vegan",
          description:
            "Tomato sauce, ",
          sizeAndPrice: {
            30: 16,
            40: 19,
          },
        },
      ];
		return pizza
	}
}