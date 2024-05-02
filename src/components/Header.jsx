import PropTypes from "prop-types"
import { ImImages } from "react-icons/im"

function Header({ title }) {
  return (
    <header className="page-header">
      <h1>
        <ImImages className="icon" />
        <span>{title}</span>
      </h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
