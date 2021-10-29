// using modules downloaded using terminal command
import React from 'react';
import PropTypes from "prop-types";

// what makes react amazing : it unables to make a reusable component.
// component should start with an uppercase
function Food({name, picture, rating}){
  return (
  <div>
    <h1>I love {name}</h1>
    <img src={picture} alt={name}></img>
    <h3>rating: {rating}/10.0</h3>
  </div>
  );
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating:5
    },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating:1
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating:5
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating:2
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating:8
  }
];

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} picture={dish.image}/>
// }

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  
}




function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
      {/* {foodILike.map(dish=>renderFood(dish))} */}
    </div>
  );
}

// how to make a class component
// default method: render, life cycle
class App extends React.Component{

  constructor(props){
    super(props);
    // component: constructor -> render
    console.log("hello from constructor")
  }

  // no return b/c it is not a function
  // has a render method
  // react automatically exectue the render method of your class component
  // class component: has "state" 
  // in state, we put data that we want to change
  state = {
    count: 0
  }

  add = () =>{
    //1) this.state.count = 1;
    // -> give warning : don't mutate state directly, use setState()
    // why? react is smart, when you change the data in state, it wants you to use set method that it refresh the data used in the HTML 
    
    // 2) this.setState({count: this.state.count + 1})
    //not recommended < dependent on state

    //everytime you call setState, react calls render function with a new state
    this.setState(current =>({count: current.count + 1}))
  }

  minus = () =>{
    this.setState(current =>({count: current.count -1 }))
  }

  componentDidMount(){
    console.log("component rendered")
  }

  componentDidUpdate(){
    console.log("I just updated")
  }

  // it is called when page goes away
  componentWillUnmount(){
    console.log("goodbye, cruel world")
  }

  render(){
    console.log("I am rendering")
    return (
      <div>
        <h1>the number is {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
}

/*

life cycle of component

-mounting : being born
-updating
-unmounting: die. when page is changed, component is replaced using state... and so on

*/

// export default App;
