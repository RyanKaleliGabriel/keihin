import PropTypes from 'prop-types'

function Bluespan({children}) {
    return (
        <span className="text-nrmblue">{children}</span>
    )
}

export default Bluespan

Bluespan.propTypes = {
    children: PropTypes.any
}
