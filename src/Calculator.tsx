import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// let storedValues: string[] = [];
// let currentValues: string[] = [];

function Calculator() {
  const [value, setValue] = useState<string>('0');
  const [storedValues, setStoredValues] = useState<string[]>([]);
  const [endNumberTyping, setEndNumberTyping] = useState<boolean>(true)

  // useEffect(() => {
  //   console.log(storedValues);

  //   // action on update of movies
  // }, [storedValues]);

  // useEffect(() => { console.log(value), [value] });
  // useEffect(() => { console.log(storedValues), [storedValues] });
  // useEffect(() => { console.log(endNumberTyping), [endNumberTyping] });


  // console.log(storedValues);

  // console.log(6*(3+6));


  function storeResult() {
    // setValue('0');
    setStoredValues(currentValues => [...currentValues, value]);
    // console.log(storedValues);

  }

  function calculate(operator: string) {
    // console.log(storedValues);
    // const sum = storedValues.filter(acc, value => )
    switch (operator) {
      case 'add':
        // console.log('+');
        // console.log(storedValues.length > 0);
        // if (storedValues.length > 0) {
        // const sum = storedValues.reduce(
        //   (acc, value) => parseFloat(acc) + parseFloat(value),
        //   value,
        // );
        // // setStoredValues([sum.toString()]);
        // // setValue(sum.toString())
        // // console.log(sum);
        // }
        // const sum = storedValues.reduce(
        //   (acc, value) => acc + parseInt(value),
        //   0,
        // );
        // console.log(storedValues);
        break;
      case 'substract':
        console.log('-');
        break;
      case 'divide':
        console.log('/');
        break;
      case 'multiply':
        console.log('*');
        break;
    }
  }

  function reset() {
    setValue('0');
    setStoredValues([])
    // storedValues = [];
  }

  function add(a: number, b: number) { }

  function substract(a: number, b: number) { }

  function multiply(a: number, b: number) { }

  function divide(a: number, b: number) { }

  const handleClick = (e: any) => {
    const clickedButton = (e.currentTarget as HTMLButtonElement);
    const calculatorFunctionType = clickedButton.getAttribute('data-type')
    const clickedButtonValue = clickedButton.value
    // console.log(calculatorFunctionType);

    switch (calculatorFunctionType) {
      case 'numeric':
        setEndNumberTyping(false);
        updateValue(clickedButton.value);

      //     if (storedValues.length > 0) {
      //   setValue(storedValues[0])
      //   updateValue(clickedButton.value);

      // }

        // storedValues.length === 0 ? setValue('0') : setValue(storedValues[0])
        // if (storedValues.length > 0) {
        //   setValue(storedValues[0])
        //   updateValue(clickedButton.value);

        // }

        // storedValues.length > 0 ? setValue('0') : setValue(storedValues[0])


        break;
      case 'operator':
        setEndNumberTyping(true);
        // setValue(storedValues[0])
        // storedValues.length === 0 ? 0 : storedValues[0]
        storeResult();
        // storedValues.length === 0 ? 0 : storedValues[0]

        // storedValues.length === 0 ? setValue('0') : setValue(storedValues[0])
        // console.log(storedValues.length);

        // console.log(storedValues);

        // updateValue('0');
        // console.log(clickedButtonValue);
        calculate(clickedButtonValue);
        break;

      case 'function':
        if (clickedButtonValue === 'Del') {
        } else if (clickedButtonValue === 'Reset') {
          reset();
        }
        break;
    }
  };

  const updateValue = (number: any) => {
    // setEndNumberTyping(false);
    let newValue: string;

    console.log(number);
    console.log(value);
    console.log(storedValues);
    
    
    if (storedValues.length > 0) {
      setValue('0')
    }
      
      value === '0' ? newValue = number : newValue = value.concat('', number)
      
      if (value.includes('.') && number === '.') return;
      
      console.log(value);
      console.log(newValue);

    setValue(newValue)
  }

  return (

    <div className="wrapper">
      <div className='calculator flex flex-col gap-8'>
        {/* <div className="header">
          <div className="logo"></div>
          <div className="theme">
            <h2>Theme</h2>
            <div className="flex">
              <div>
                <input type="radio" id="classic-theme" name="theme-switcher" checked />
                <label htmlFor="classic-theme">Classic</label>
              </div>
              <div>
                <input type="radio" id="synthwave-theme" name="theme-switcher" />
                <label htmlFor="synthwave-theme">Synthwave</label>
              </div>
              <div>
                <input type="radio" id="retro-theme" name="theme-switcher" />
                <label htmlFor="retro-theme">Retro</label>
              </div>
            </div>
          </div>
        </div> */}
        <div className="display flex p-8 rounded-lg justify-end align-middle bg-[#181f32] text-white text-3xl font-bold">
          <h3>{value}</h3>
        </div>
        <div className="keyboard bg-[#252d44] p-8 rounded-lg grid grid-cols-4 gap-5">
          <button value="7" onClick={handleClick} data-type="numeric" className="btn">7</button>
          <button value="8" onClick={handleClick} data-type="numeric" className="btn">8</button>
          <button value="9" onClick={handleClick} data-type="numeric" className="btn">9</button>
          <button value="Del" onClick={handleClick} data-type="function" className="btn btn-blue">Del</button>
          <button value="4" onClick={handleClick} data-type="numeric" className="btn">4</button>
          <button value="5" onClick={handleClick} data-type="numeric" className="btn">5</button>
          <button value="6" onClick={handleClick} data-type="numeric" className="btn">6</button>
          <button value="add" onClick={handleClick} data-type="operator" className="btn">+</button>
          <button value="1" onClick={handleClick} data-type="numeric" className="btn">1</button>
          <button value="2" onClick={handleClick} data-type="numeric" className="btn">2</button>
          <button value="3" onClick={handleClick} data-type="numeric" className="btn">3</button>
          <button value="substract" onClick={handleClick} data-type="operator" className="btn">-</button>
          <button value="." onClick={handleClick} data-type="numeric" className="btn">.</button>
          <button value="0" onClick={handleClick} data-type="numeric" className="btn">0</button>
          <button value="divide" onClick={handleClick} data-type="operator" className="btn">/</button>
          <button value="multiply" onClick={handleClick} data-type="operator" className="btn">x</button>
          <button value="Reset" onClick={handleClick} data-type="function" className="btn btn-blue col-span-2">Reset</button>
          <button value="=" onClick={handleClick} data-type="operator" className="btn btn-red col-span-2">=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
