
// JSX Elements
const var = <h1>Hello World</h1>;
const p1 = <p id="large">foo</p>;
const myDiv = (<div><h1>Hello World</h1></div>);
const myDiv = <div className="big">Hello World</div>;

// Rendering JSX Elements
const container = document.getElementById('container');
const root = createRoot(container);

root.render(<h1>Hello world</h1>);
root.render(var);
