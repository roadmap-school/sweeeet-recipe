import { connect } from "react-redux";

import Home from "../../components/Home/Home";

const mapStateToProps = (state) => ({
recipes: state.recipes.listRecipes,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);