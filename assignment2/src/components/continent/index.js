import React from "react";
import Loader from "../common/loader";
import CountryList from "../continent/countryList";

class Continent extends React.Component {
  componentDidMount() {
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
            <h1>{continent.name}({continent.code})</h1>
            <CountryList countries={continent.countries} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Continent;