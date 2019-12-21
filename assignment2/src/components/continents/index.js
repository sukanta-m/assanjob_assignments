import React from "react";
import Loader from "../common/loader";
import List from "./list";

class Continents extends React.Component {
  componentDidMount() {
    this.props.fetchContinents();
  }

  handleOnRowClick = (code) => {
    this.props.fetchContinent(code).then(response => {
      if (!response.error)
        this.props.history.push(`/continents/${code}`);
    });
  }

  render() {
    const { loading, list } = this.props;

    return (
      <div className="margin-100">
        <h1>Continents:</h1>
        {loading ? <Loader /> : <List continents={list} handleOnRowClick={this.handleOnRowClick} />}
      </div>
    );
  }
}

export default Continents;