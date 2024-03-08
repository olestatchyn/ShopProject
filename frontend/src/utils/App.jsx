import axios from "axios"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {

	return <RouterProvider router={router} />
	// // const [data, setData] = useState([{}]);

	// const userData = {
	// 	name: "Mydwakola",
	// 	email: "Mykola@example.com"
	// };

	// const fetchData = async () => {
	// 	const responce = await axios("http://localhost:5000/api/users")
	// 	console.log(responce.data)
	// }

	// const fetchDataPost = async () => {
	// 	await axios.post('http://localhost:5000/api/users', userData)
	// 	.then(function (response) {
	// 		console.log('Response:', response.data);
	// 	})
	// 	.catch(function (error) {
	// 		console.log('Error:', error.response.data.error);
	// 	});
	// }

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