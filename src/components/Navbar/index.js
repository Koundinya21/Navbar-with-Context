// Write your code here
import './index.css'

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/light-theme-img.png`
        : `https://assets.ccbp.in/frontend/react-js/dark-theme-img.png`

      const navbarBgClassName = isDarkTheme
        ? `navbar-bg-dark`
        : `navbar-bg-light`

      const websiteLogoImageUrl = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png`
        : `https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png`

      const navItemClassName = isDarkTheme
        ? `list-text-dark-theme`
        : `list-text-light-theme`

      return (
        <div className={`nav-bar ${navbarBgClassName}`}>
          <div className="navbar-content">
            <img
              src={websiteLogoImageUrl}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="theme-button"
              type="button"
              onClick={onToggleTheme}
            >
              <img src={themeImageUrl} alt="theme" className="theme-image" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
