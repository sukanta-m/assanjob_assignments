import React from "react";
import PropTypes from 'prop-types';
import Loader from "../common/loader";
import CountryList from "../continent/countryList";

class Continent extends React.Component {
  componentDidMount() {
    //on page refreshed, we needs to do api call for specific continent details
    if (!this.props.continent.code) {
      this.props.fetchContinent(this.props.match.params.code);
    }
  }

  render() {
    const { continent, loading } = this.props;

    return (
      <div className="margin-100">
        {loading && <Loader />}
        {!loading && (
          <React.Fragment>
            <h1 className="padding-left10">{continent.name}({this.props.match.params.code})</h1>
            <CountryList countries={continent.countries} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

Continent.propTypes = {
  continent: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

Continent.defaultProps = {
  loading: false
}
export default Continent;