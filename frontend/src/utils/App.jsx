import axios from "axios"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {

	// // const [data, setData] = useState([{}]);

	const userDataRegister = {
		name: "Mykola Teslia",
		email: "test@example.com",
		password: "not_safe"
	};

	const userDataLogin = {
		email: "test@example.com",
		password: "not_safe"
	};

	// const fetchData = async () => {
	// 	const responce = await axios("http://localhost:5000/api/users")
	// 	console.log(responce.data)
	// }

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
}

export default App;