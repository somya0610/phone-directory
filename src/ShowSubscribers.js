import React, { Component } from "react";
import Header from "./common/Header"
import './ShowSubscribers.css';
import './common/common.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  deleteHandler(message) {
    alert(message);
  }

  onDeletedClick =(subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

//   constructor() {
//     super();
//     this.state = {
//       subscribersListToShow: []
//     }
//     console.log("Constructor called");
//   }

//   componentDidMount() {
//     let newSubscriber = {
//         id: 1,
//         name: 'Shilpa',
//         phone: '9999999999'
//     }
//     let subscriberList = this.state.subscribersListToShow;
//     subscriberList.push(newSubscriber);
//     this.setState({subscribersListToShow: subscriberList});
//     console.log("componentDidMount called");
//     console.log("State", this.state);
// }

  render() {
    console.log("Render called");
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Shilpa",
    //     phone: 88888888
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti",
    //     phone: 77777777
    //   }
    // ];

    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button> </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {/* <div className="grid-container">
            <span className="grid-item">Shilpa</span>
            <span className="grid-item">88888888</span>
          </div>
  
          <div className="grid-container">
            <span className="grid-item">Srishti</span>
            <span className="grid-item">77777777</span>
          </div> */}

          {/* {subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, "Delete Clicked")}>Delete</button>
              </span>
            </div>
          })} */}

          {/* {this.state.subscribersListToShow.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, "Delete Clicked")}>Delete</button>
              </span>
            </div>
          })} */}
          {this.props.subscriberList.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                {/* <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, "Delete Clicked")}>Delete</button> */}
                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
              </span>
            </div>
          })}
        </div>
      </div>
    );
  }
}

// function App() {
//   // let x = 1;
//   // let y = 2;



//   // return (
//   //   <div>
//   //     {/* <div className="header">
//   //       Phone Directory
//   //     </div> */}
//   //     <Header />
//   //     <div className="component-body-container">
//   //       <button className="custom-btn add-btn">Add</button>

//   //       <div className="grid-container heading-container">
//   //         <span className="grid-item name-heading">Name</span>
//   //         <span className="grid-item phone-heading">Phone</span>
//   //       </div>

//   //     </div>
//   //     {/* <label htmlFor="name">Name: </label>
//   //     <input id="name" type="text" placeholder="Type Here" defaultValue="Somya" />
//   //     <input id="name" type="text" placeholder="Type Here" defaultValue={x+y} /> */}
//   //   </div>

//   //   // <div id="module">
//   //   //   <p>ReactJS</p>
//   //   // </div>

//   //   // React.createElement("div", {id:"module"},
//   //   //   React.createElement("p", null, "ReactJS")
//   //   // )


//   // );
// }

export default ShowSubscribers;
