// Home.js
import React from "react";
import { Link,useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    function navigateHandelar(){
        navigate('/products');
    }
  return (
    <>
      <div>Home</div>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>Prajwal</p>
      <p>
        <button onClick={navigateHandelar}>Navigate</button>
      </p>
    </>
  );
}
