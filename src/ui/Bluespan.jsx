import PropTypes from 'prop-types'

function Bluespan({children}) {
    return (
        <span className="text-[skyblue]">{children}</span>
    )
}

export default Bluespan

Bluespan.propTypes = {
    children: PropTypes.any
}
