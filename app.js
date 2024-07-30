import React from "react";
import ReactDOM from "react-dom";

// React element
const JSXHeading = (<h1 className="heading">
  Namaste React using JSX
</h1>)

// React component(functional component)
const Title = () => {
  return <h2 className="head">Namaste React using functional component</h2>
}

const title = <h3>Namaste React using react element</h3>

// short hand syntax of arrow function
const HeadingCOmponent1 = () => 
  (<h1 id="heading"><Title/>{title}
    Namaste React using functional component1
    </h1>)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(JSXHeading);

// syntax to render react component
root.render(<HeadingCOmponent1 />)