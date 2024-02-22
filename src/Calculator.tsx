import { useEffect, useState } from 'react'

let storeValue: number = 0;
let endTypingNumber: boolean = false;
let currentTypingNumber: string = '0';

function Calculator() {
  const [total, setTotal] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [value, setValue] = useState<string>('0');

  useEffect(() => { console.log(value), [value] });

  function storeResult() {
    storeValue = storeValue + parseFloat(value);
  }

  function reinitDisplay() { }

  function calculate(operator: string) {
    switch (operator) {
      case 'add':
        break;
      case 'substract':
        break;
      case 'divide':
        break;
      case 'multiply':
        break;
    }
  }

  function reset() {
    setValue('0');
  }

  const handleClick = (e: any) => {
    const clickedButton = (e.currentTarget as HTMLButtonElement);
    const calculatorFunctionType = clickedButton.getAttribute('data-type')
    const clickedButtonValue = clickedButton.value

    switch (calculatorFunctionType) {
      case 'numeric':
        updateValue(clickedButton.value);
        break;
      case 'operator':
        setValue(storeValue.toString())
        storeResult();
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
    currentTypingNumber = currentTypingNumber.concat('', number)
    setValue(currentTypingNumber)
    while (currentTypingNumber.charAt(0) == '0') currentTypingNumber = currentTypingNumber.substring(1);
    if (value.includes('.') && number === '.') return;
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
        <div className="display flex flex-col text-right p-8 rounded-lg justify-end bg-[#181f32] text-white font-bold">
          <h3 className="text-2xl">{total} {operator}</h3>
          <h2 className='text-3xl'>{value}</h2>
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
