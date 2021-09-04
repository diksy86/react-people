import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    const { title, gridMode, viewModeOff, changeViewMode, onRefresh } = props

    const viewModeIcon = gridMode ? 'view_list' : 'view_module'

    const renderRightMenu = () => {
        if (viewModeOff) {
            return ''
        }

        return (
            <ul className="right">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="#!" onClick={onRefresh}>
                        <i className="material-icons">refresh</i>
                    </a>
                </li>
                <li onClick={changeViewMode}>
                    <a href="#!">
                        <i className="material-icons">{viewModeIcon}</i>
                    </a>
                </li>
            </ul>
        )
    }

    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        {title}
                    </Link>
                    {renderRightMenu()}
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    gridMode: PropTypes.bool,
    viewModeOff: PropTypes.bool,
    changeViewMode: PropTypes.func
}

Header.defaultProps = {
    title: 'BIT People',
    changeViewMode: f => f,
    onRefresh: f => f
}

export default Header
