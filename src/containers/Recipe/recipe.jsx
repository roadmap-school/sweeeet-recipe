import { connect } from "react-redux";

import Recipe from "../../components/Recipe/Recipe";

const mapStateToProps = (state) => ({
recipes: state.recipes.listRecipes,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Recipe);