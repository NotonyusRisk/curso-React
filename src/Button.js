import propTypes from 'prop-types'

export function Button({text, name}){
    return <button>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: propTypes.string.isRequired
}

Button.defaultProps = {
    name: 'some user'
}