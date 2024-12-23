import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addToCart, decrement, deleteFromCart, increment, reset } from './fetures/counter/counterSlice';


 
function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function handleIncrementClick(){
      dispatch(increment());
  }

  function handleDecrementClick(){
      dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
}
//Redux toolkit Concept
const cart = useSelector((state) => state.counter.cart);
const handleAddToCart = (item) => {
  dispatch(addToCart(item)); // Dispatch the action to add item to cart
};
function  handleDeleteFromCart(id){
dispatch(deleteFromCart({id}));
}
  return (
    <div>
 
      <button onClick={handleIncrementClick} style={{padding:'30px',backgroundColor:'beige'}}>+</button>
      <br/>
      <hr/>
      <span style={{backgroundColor:"black",color:"white"}}>Count:{count}</span>
      <hr/>
 
      <button onClick={handleDecrementClick} style={{padding:'30px',backgroundColor:'beige'}}>-</button>
      <br/>
      <br/>
      <button onClick={handleReset} style={{padding:'10px',backgroundColor:'red'}}>Reset</button>
  
   <hr/>  <hr/><h3>Add to Cart Functionality</h3>  <hr/> <hr/>

   <button style={{backgroundColor:'blue'}} onClick={() => handleAddToCart({ id: Date.now(), name: 'Sample Item' })}>
        Add to Cart
      </button>
      <hr/>
      <br/>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name}
            <br/>
            <button style={{backgroundColor:'orange'}} onClick={() => handleDeleteFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
  
    </div>
  )
}

export default App
