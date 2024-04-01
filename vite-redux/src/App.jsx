import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componente/Header";
import DisplayCounter from "./componente/DisplayCounter";
import Model from "./componente/Model";
import Controls from "./componente/Controls";
import "./App.css"
import PrivateMessage from "./componente/PrivateMessage";
import { useSelector } from "react-redux";

function App() {
  const privateToShow  = useSelector((store) => store.toDisplay);
  // console.log(privateToShow)
  return (
      <Model>
        <Header />
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://media.istockphoto.com/id/1409450100/photo/laptop-on-word-bootstrap.jpg?b=1&s=612x612&w=0&k=20&c=kXS7gu2Ht-By65pYDxgjvRhalD_ej_FRfh-QQcwl6D8="
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
        { privateToShow ? <PrivateMessage/>:  <DisplayCounter />}
          <Controls/>
        </div>
      </div>
      </Model>
    
  );
}

export default App;
