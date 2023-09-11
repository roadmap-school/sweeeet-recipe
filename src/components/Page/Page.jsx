import Recipe from "../Recipe/Recipe";

import './page.scss';
import Home from "../Home/Home";

import data from "../../data/data";

const Page = () => (
    <div className="page" >
        <h1 className="page-title">Orecipe</h1>
        <div className="page-content">
            {/* home or recipe >> */}
            {/* <Recipe recipe={data[0]} /> */}
            <Home />
        </div>
    </div>

);

export default Page; 