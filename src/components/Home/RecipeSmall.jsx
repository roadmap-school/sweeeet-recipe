import './home.scss';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const RecipeSmall = ({ thumbnail, title, difficulty }) => {
    const slug = slugify(title, { lower: true });
    return (
        <article className="recipe-small">
            <img src={thumbnail} alt={title} />
            <div className="recipe-small-content">
                <h2>{title}</h2>
                <p>Difficulté: {difficulty}</p>
                <Link to={`/recipe/${slug}`}>Voir la recette</Link>
            </div>
        </article>
    );
};

export default RecipeSmall;
