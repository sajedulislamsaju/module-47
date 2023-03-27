import logo from './logo.svg';
import './App.css';

const sum = 555;



function App() {
  return (
    <div className="App">
      <Persion name="Sakib al Hasan" prpfatiop="creaters"></Persion>
      <Persion name="Sakib al Hasan" prpfatiop="creaters"></Persion>
      <Persion></Persion>
      <h1>Here some component in the bottom.</h1>
      <p>Here some Friend of sakib</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Persion(props) {
  return <div className='conteinor'>
    <h1>Name : {props.name}</h1>
    <h1>Profation : {props.prpfatiop}</h1>
  </div>

}


function Friend (){
  return (
    <div className='conteinor'>
      <h1>Ronaldo </h1>
      <p>He is a footballer in the world .</p>
    </div>
  )
}

export default App;


{/* <h1>Welcome to my first webside thanks for comming .</h1>
      <div className="conteinor">
        <h3>this is the containor</h3>
      </div>

      <div className="music">

      </div>
      <h1>Name : {777 + sum}</h1> */}