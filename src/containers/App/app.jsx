import { connect } from "react-redux";

import App from "../../components/App/App";

import { fetchRecipes } from "../../Actions/actions";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchRecipes: () => {
        console.log('chargement des recettes');
        dispatch(fetchRecipes());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);