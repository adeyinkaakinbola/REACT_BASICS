// JSX - JavaScript XML
var app ={
    title:'Todo App',
    subtitle:'business goals',
    options:['life goals','career goals']
}
var template =(
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
var user = {
    name:'Adeyinka',
    age:19,
    location:'Washington DC'
};
let count = 0;
 const addOne =()=>{
  count ++;
  renderCounter();
 };
 const minusOne =()=>{
     count --;
renderCounter();
};
const reset =()=>{
    count = 0;
  renderCounter();
};
Math.floor(Math.random()* 8);
var appRoot = document.getElementById('app');

const renderCounter = ()=>{
    var templateTwo =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button> 
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
};
renderCounter();
