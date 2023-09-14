
import { Route, Routes } from "react-router-dom";
import './page.scss';

import Recipe from "../../containers/Recipe/recipe";
import Home from "../../containers/Home/home";


const Page = () => (
    <div className="page" >
        <h1 className="page-title">Orecipe</h1>
        <div className="page-content">


            <Routes>
                {/* 1st route */}

                <Route
                    path="/"
                    element={<Home />} />

                {/* 2nd route */}

                <Route
                    path="/recipe/:slug"
                    element={<Recipe />} />

            </Routes>

        </div>
    </div>
);

export default Page; 