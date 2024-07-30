
// JSX Elements
const var = <h1>Hello World</h1>;
const p1 = <p id="large">foo</p>;
const myDiv = (<div><h1>Hello World</h1></div>);
const myDiv = <div className="big">Hello World</div>;
const myDiv = <img src="" />;

// Rendering JSX Elements
const container = document.getElementById('container');
const root = createRoot(container);

root.render(<h1>Hello world</h1>); //prints Hello world
root.render(var); //prints variable value

root.render(<h1>{2+3}</h1>); //prints 5
root.render(<h1>{var}</h1>); // prints the variable value
root.render(<img src={imgVar} />); // prints the image

// Advanced JSX Elements 
function clickAlert() { alert('You clicked it!'); } // Creating a function to recall below
<img onClick={clickAlert} /> // onClick or onMouseOver

// Image value using if else
if (var === 'value') { img = <img src={} /> } 
else { img = <img src={} /> }

const newImage = <img src={pics[
  coinToss() === 'head' ? 'kitty'
  : 'doggy'
]} />

// Lists only if value is true
<ul>
  <li>Sushi Burrito</li>
  <li>Rhubarb Pie</li>
  {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
</ul>
