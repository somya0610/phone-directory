import React from "react";
import Header from "./Header"

function App() {
  // let x = 1;
  // let y = 2;
  return (
    <div>
      {/* <div className="header">
        Phone Directory
      </div> */}
      <Header />
      <button> Add </button>
      <div>
        <span> Name </span><br />
        <span> Phone </span>
      </div>
      {/* <label htmlFor="name">Name: </label>
      <input id="name" type="text" placeholder="Type Here" defaultValue="Somya" />
      <input id="name" type="text" placeholder="Type Here" defaultValue={x+y} /> */}
    </div>

    // <div id="module">
    //   <p>ReactJS</p>
    // </div>

    // React.createElement("div", {id:"module"},
    //   React.createElement("p", null, "ReactJS")
    // )


  );
}

export default App;
