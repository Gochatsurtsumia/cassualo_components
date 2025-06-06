import React from "react";
import Header from "./components/header.jsx";
import Pagination from "./components/pagination.jsx";
import DateTimePicker from "./components/DateTimePicker.jsx";
import ButtonGroup from "./components/ButtonGroup.jsx";
import CheckboxGroup from "./components/CheckboxGroup.jsx"; // NEW
import Dropdown from "./components/Dropdown.jsx";

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
          perPage={this.state.perPage}
          onPageChange={(page) => {
            console.log("Changed to page", page);
            return true;
          }}
        />
        <h1>Select Date & Time</h1>
        <DateTimePicker />

        <h1>Buttons</h1>
        <ButtonGroup />

        <h1>Checkboxes</h1>
        <CheckboxGroup />
        <Dropdown/>
      </>
    );
  }
}

export default App;
