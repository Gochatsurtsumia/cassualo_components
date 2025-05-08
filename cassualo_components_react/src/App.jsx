import React, { useState } from "react";
import Header from "./components/header.jsx"; 
import Pagination from "./components/pagination.jsx"; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: window.innerWidth > 480 ? 10 : 7,
      percentage: 0,
    };
  }

  updatePerPage = () => {
    this.setState({ perPage: window.innerWidth > 480 ? 10 : 7 });
  };

  increasePercentage = () => {
    this.setState((prevState) => ({
      percentage: Math.min(prevState.percentage + 10, 100),
    }));
  };

  decreasePercentage = () => {
    this.setState((prevState) => ({
      percentage: Math.max(prevState.percentage - 10, 0),
    }));
  };

  componentDidMount() {
    window.addEventListener("resize", this.updatePerPage);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePerPage);
  }
  render() {
    return (
      <>
        <Header />
        <Pagination
          total={100} 
          page={1}
          perPage={10} 
          onPageChange={(page) => {
            console.log("Changed to page", page);
            return true;
          }} 
        />
      </>
    );
  }
}
export default App;
