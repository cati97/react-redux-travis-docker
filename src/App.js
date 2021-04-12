import './App.css';
import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {add_counter} from "./actions";
import Counter from "./Counter";

const App = () => {
  const counters = useSelector(state => state.counters);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [step, setStep] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(add_counter(name, step));
    setName('');
    setStep(0);
  }

  return (
      <div className={"counters-list"}>
        <form className={"add-form"} onSubmit={handleSubmit}>
          <input type={"text"} name={"name"} placeholder={"Name of counter"} onChange={e => setName(e.target.value)} value={name}/>
          <input type={"text"} name={"step"} placeholder={"Modification step"} onChange={e => setStep(parseInt(e.target.value))} value={step}/>
          <button>Add</button>
        </form>
        {counters.map(counter => (
            <Counter key={counter.name} name={counter.name} value={counter.value} step={counter.step} dispatch={dispatch}> </Counter>
        ))}
      </div>
  );
}

export default App;
