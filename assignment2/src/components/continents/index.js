import React from "react";
import PropTypes from 'prop-types';
import Loader from "../common/loader";
import List from "./list";

class Continents extends React.Component {
  //This method for calling api call for fetching all continents
  componentDidMount() {
    this.props.fetchContinents();
  }

  /*
    This method fired on click of any row
    @code: specific continent code
  */
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
        <h1 className="padding-left10">Continents:</h1>
        {loading ? <Loader /> : <List continents={list} handleOnRowClick={this.handleOnRowClick} />}
      </div>
    );
  }
}

Continents.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object)
}

Continents.defaultProps = {
  loading: false,
  list: []
}
export default Continents;