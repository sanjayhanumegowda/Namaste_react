import React from "react";
import ReactDOM from "react-dom";

// React.createElement => object => HtmlElement(render)
const heading = React.createElement('h1', { id: 'heading' }, "Namaste React");

// JSX syntax - It is not Html but it is html like
// JSX is transpiled before it reaches JS => Parcel-> babel
// JSX element is transpiled => reactElement( Js object) => Html Element (render)
const JSXHeading = (<h1 className="heading">
  Namaste React using JSX
</h1>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(JSXHeading);