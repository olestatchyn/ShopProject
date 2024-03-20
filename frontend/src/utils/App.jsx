// import axios from "axios"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./../style/App.css";

function App() {
  // const userDataRegister = {
  //   name: "Teslia My",
  //   email: "test@example.com",
  //   password: "not_safe"
  // };

  // const userDataLogin = {
  //   email: "test@example.com",
  //   password: "not_safe"
  // };

  // const fetchDataPost = async () => {
  //   await axios.post('http://localhost:5000/api/register', userDataRegister)
  //   .then(function (response) {
  //     console.log('Response:', response.data);
  //   })
  //   .catch(function (error) {
  // 		console.log(error);
  //     console.log('Error:', error.response.data.error);
  //   });
  //   await axios.post('http://localhost:5000/api/login', userDataLogin)
  //   .then(function (response) {
  //     console.log('Response:', response.data);
  //   })
  //   .catch(function (error) {
  //     console.log('Error:', error.response.data.error);
  //   });
  // }

  // fetchDataPost();

  return <RouterProvider router={router} />;
}

export default App;
