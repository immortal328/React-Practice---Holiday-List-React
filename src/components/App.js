
import '../styles/App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India"
    ];
    this.list = this.cityList.filter((ap) => ap.country === "India");
  }
  render() {
    return (
      <div id="main">
        <ol>
          {this.list.map((ap, i) => (<li key={"location" + (i + 1)}>{ap.name}</li>))}
        </ol>
      </div>
    );
  }
}
export default App;
