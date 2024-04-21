// import propTypes from 'prop-types'

export function Button() {
  return (
    <button
      onClick={function () {
        console.log("Hola mundo");
      }}
    >
      Click me
    </button>
  );
}

// Button.propTypes = {
//     text: propTypes.string.isRequired
// }

// Button.defaultProps = {
//     name: 'some user'
// }
