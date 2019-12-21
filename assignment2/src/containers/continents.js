import { connect } from "react-redux";
import Continents from "../components/continents";
import { fetchContinents, fetchContinent } from "../actions/continent.actions";

const mapStateToProps = (state) => {
  return {
    list: state.Continents.list,
    loading: state.Continents.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContinents: () => dispatch(fetchContinents()),
    fetchContinent: (code) => dispatch(fetchContinent(code))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Continents);