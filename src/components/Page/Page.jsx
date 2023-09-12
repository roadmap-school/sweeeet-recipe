import Recipe from "../Recipe/Recipe";
import { Route, Routes } from "react-router-dom";

import './page.scss';
import Home from "../Home/Home";

import data from "../../data/data";

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
                    path="/recipe/recette1"
                    element={<Recipe recipe={data[0]} />} />


            </Routes>

        </div>
    </div>
);

export default Page; 