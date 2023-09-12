import './nav.scss';
import { NavLink } from 'react-router-dom';
import slugify from 'slugify';

const Nav = ({ recipes }) => (
    <nav className='nav'>
        <NavLink to="/" className='nav-item' activeclassname='nav-item-active' exact="true" >Accueil</NavLink>

        {recipes.map((recipe) => {
            const slug = slugify(recipe.title, { lower: true });

            return (
                <NavLink to={`/recipe/${slug}`} className='nav-item' activeclassname='nav-item' key={recipe.id}>
                    {recipe.title}
                </NavLink>
            );
        })}

    </nav>
);

export default Nav; 