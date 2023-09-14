import { connect } from "react-redux";

import Nav from "../../components/Nav/Nav";

const mapStateToProps = (state) => ({
recipes: state.recipes.listRecipes,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Nav);