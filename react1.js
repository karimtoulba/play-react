
// JSX Elements
const var = <h1>Hello World</h1>;
const p1 = <p id="large">foo</p>;
const myDiv = (<div><h1>Hello World</h1></div>);

// Rendering JSX Elements
const container = document.getELementById('app');
const root = createRoot(container);
root.render(<h1>Hello World</h1>);
