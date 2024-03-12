import axios from "axios"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {

	// // const [data, setData] = useState([{}]);
<<<<<<< HEAD

	const userDataRegister = {
		name: "Mykola Teslia",
		email: "test@example.com",
		password: "not_safe"
	};

	const userDataLogin = {
		email: "test@example.com",
		password: "not_safe"
	};

=======
	
	// const userData = {
	// 	name: "Mydwakola",
	// 	email: "Mykola@example.com",
	// 	password: "password"
	// };
	
>>>>>>> 1e3f315574f4cd8029b1457dd1c2937ed66c511c
	// const fetchData = async () => {
		// 	const responce = await axios("http://localhost:5000/api/users")
		// 	console.log(responce.data)
	// }
<<<<<<< HEAD

	const fetchDataPost = async () => {
		await axios.post('http://localhost:5000/api/register', userDataRegister)
		.then(function (response) {
			console.log('Response:', response.data);
		})
		.catch(function (error) {
			console.log('Error:', error.response.data.error);
		});
		await axios.post('http://localhost:5000/api/login', userDataLogin)
		.then(function (response) {
			console.log('Response:', response.data);
		})
		.catch(function (error) {
			console.log('Error:', error.response.data.error);
		});
	}

	fetchDataPost();

	return <RouterProvider router={router} />

=======
	
	// const fetchDataPost = async () => {
	// 	await axios.post('http://localhost:5000/api/register', userData)
	// 	.then(function (response) {
	// 		console.log('Response:', response.data);
	// 	})
	// 	.catch(function (error) {
	// 		console.log('Error:', error.response.data.error);
	// 	});
	// }
	// fetchDataPost()
>>>>>>> 1e3f315574f4cd8029b1457dd1c2937ed66c511c
  // return (
		//   <div>
		//     {/* <h1>Hello world</h1> */}
		// 		<div>
		// 			<input style={{marginTop: 10}} type="text" />
		// 		</div>
		// 		<div>
		// 			<input style={{marginTop: 10}} type="text" />
		// 		</div>
		// 		<div>
		// 			<button  style={{marginTop: 10}} onClick={fetchData}> Get Data</button>
		// 		</div>
		// 		<div>
		// 			<button  style={{marginTop: 10}} onClick={fetchDataPost}> Post Data</button>
		// 		</div>
		//   </div>
		// );
		return <RouterProvider router={router} />
		// return <h1>Hello world</h1>

	}
	
export default App;