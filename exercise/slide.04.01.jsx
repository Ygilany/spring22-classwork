// NOTE: this is NOT being used as a component. We're not quite there yet.
function message({children}) {
  return <div className="message">{children}</div>
}

const element = (
  <div className="container">
    {message({children: `Hello World`})}
    {message({children: `Goodbye World`})}
  </div>
)

ReactDOM.render(element, document.getElementById(`root`))

// Then do this
// {React.createElement(message, {children: 'Hello World'})}

// Then make it make it captalized


function FavoriteNumber({favoriteNumber}) {
  return <div>My favorite number is: {favoriteNumber}</div>
}

const PropTypes = {
  number(props, propName, componentName) {
    if (typeof props[propName] !== `number`) {
      return new Error(`Some useful error message here`)
    }
  },
}

FavoriteNumber.propTypes = {
  favoriteNumber: PropTypes.number,
}

{/* <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> */}