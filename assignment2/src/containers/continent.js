import { connect } from "react-redux";
import Continent from "../components/continent";
import { fetchContinent } from "../actions/continent.actions";

const mapStateToProps = (state) => {
  return {
    continent: state.Continent,
    loading: state.Continent.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContinent: (code) => dispatch(fetchContinent(code))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Continent);