

import  Form  from "./pages/Form"
import Navbar from "./components/navbar/Navbar";
import "./input.css";
import CardRender from "./pages/CardRender";

function App() {
  return (
    <>
      <Navbar />
      <div className="text-rose-500 p-10 text-2xl">hello</div>

      <Form/>
      <CardRender/>
     
    </>
  );
}

export default App;
