import './nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className='nav'>
        <NavLink to="/" className='nav-item' activeclassname='nav-item-active' exact="true" >Accueil</NavLink>
        <NavLink to="/recipe/recette1" className='nav-item' activeclassname='nav-item'>Recette 1</NavLink>
        <NavLink to="/recipe/recette2" className='nav-item' activeclassname='nav-item'>Recette 2</NavLink>
    </nav>
);

export default Nav; 