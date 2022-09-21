import React, {useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

import logo from '../../assets/Logo.png';
import styles from './Navbar.module.css';
import AuthContext from '../../context/AuthContext';
import Navbutton from './Navbutton'
// import { padding } from '@mui/system';


function Navbar(props) {
  let { user  } = useContext(AuthContext)

  return (
    <div className={styles.navbar}>
      <Link to='/loginmain'>
        <img className={styles.navbar_logo} src={logo} alt="" />
      </Link>
      {user && <div className={styles.navbar_search}>
        {/* <input className={styles.navbar_searchInput} type="text" />
        <SearchIcon className={styles.navbar_searchIcon} fontSize="large" />  */}
             
      </div>}
      
      <nav className={styles.nav}>
        <ul>         
          
          {user ? (                    
            <li>
              <Navbutton />
              {/* <button><b>Hello, {user.user_nickname}</b></button> */}
              {/* <button onClick={logoutUser}>Logout</button> */}
            </li>
          ): (
          <li>
            <Link to = '/login'><button>
                  Sign In
            </button>
              </Link>
          </li>
          )}        
        </ul>
      </nav>     
    </div>
  );
}

export default Navbar;
