import axios from "axios"

function App() {

	// const [data, setData] = useState([{}]);

	const userData = {
		name: "Mykola",
		password: "1234"
	};

	const fetchData = async () => {
		const responce = await axios("http://localhost:5000/api/users")
		console.log(responce.data)
	}

	const fetchDataPost = async () => {
		const responce = await axios.post('http://example.com/api/users', userData)
		console.log(responce.data)
	}

  return (
    <div>
      {/* <h1>Hello world</h1> */}
			<div>
				<input style={{marginTop: 10}} type="text" />
			</div>
			<div>
				<input style={{marginTop: 10}} type="text" />
			</div>
			<div>
				<button  style={{marginTop: 10}} onClick={fetchData}> Get Data</button>
			</div>
			<div>
				<button  style={{marginTop: 10}} onClick={fetchDataPost}> Post Data</button>
			</div>
    </div>
  );
}

export default App;