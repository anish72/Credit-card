import React,{useState} from "react";
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  return (
    <div>
       <Cards 
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
      <form>
        <input type="tel" name="number" val={number} placeholder={"Card Number"} onChange={e => setNumber(e.target.value)}onFocus={e=>setFocus(e.target.name)}/>
        <input type="tel" name="name" val={name} placeholder={"Cardholder Name"} onChange={e => setName(e.target.value)} onFocus={e=>setFocus(e.target.name)}/>
        <input type="tel" name="expiry" val={expiry} placeholder={"Enter Expiry date"} onChange={e => setExpiry(e.target.value)} onFocus={e=>setFocus(e.target.name)}/>
        <input type="tel" name="cvc" val={cvc} placeholder={"Enter Cvc"} onChange={e => setCvc(e.target.value)} onFocus={e=>setFocus(e.target.name)} />
      </form>
    </div>
  );
}
export default App;
