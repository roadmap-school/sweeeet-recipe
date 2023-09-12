import RecipeSmall from "./RecipeSmall";
import data from "../../data/data";

const Home = ({ recipes }) => (

    <main className="home">
        <p>Bienvenue sur mon site de cuisine, régalez-vous les clébards</p>
        <div className="recipe-small-container">
            {recipes.map((recipe) => (
                <RecipeSmall key={recipe.id} {...recipe} />
            ))}
        </div>
    </main>

)

export default Home; 