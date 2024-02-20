import { useEffect, useState, MouseEvent } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Calculator() {
  const [value, setValue] = useState('0')
  // const useEffect
  useEffect(() => {

  })

  class Calculate {
    reset() {

    }

    add(a: number, b: number) {

    }

    substract(a: number, b: number) {

    }

    multiply(a: number, b: number) {

    }

    divide(a: number, b: number) {

    }
  }

  const handleClick = (e: any) => {
    const clickedButton = (e.currentTarget as HTMLButtonElement);
    const isNumeric = clickedButton.getAttribute('data-type') === 'numeric'

    if (isNumeric) {
      // const currentValue = parseInt(clickedButton.value);
      updateValue(clickedButton.value);
    } else {

    }
  };

  const updateValue = (number: any) => {
    let newValue: string;

    value === '0' ? newValue = number : newValue = value.concat('', number)

    if (value.includes('.') && number === '.') return;

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
          <button value="Del" onClick={handleClick} data-type="operator" className="btn btn-blue">Del</button>
          <button value="4" onClick={handleClick} data-type="numeric" className="btn">4</button>
          <button value="5" onClick={handleClick} data-type="numeric" className="btn">5</button>
          <button value="6" onClick={handleClick} data-type="numeric" className="btn">6</button>
          <button value="+" onClick={handleClick} data-type="operator" className="btn">+</button>
          <button value="1" onClick={handleClick} data-type="numeric" className="btn">1</button>
          <button value="2" onClick={handleClick} data-type="numeric" className="btn">2</button>
          <button value="3" onClick={handleClick} data-type="numeric" className="btn">3</button>
          <button value="-" onClick={handleClick} data-type="operator" className="btn">-</button>
          <button value="." onClick={handleClick} data-type="numeric" className="btn">.</button>
          <button value="0" onClick={handleClick} data-type="numeric" className="btn">0</button>
          <button value="/" onClick={handleClick} data-type="operator" className="btn">/</button>
          <button value="*" onClick={handleClick} data-type="operator" className="btn">x</button>
          <button value="Reset" onClick={handleClick} data-type="operator" className="btn btn-blue col-span-2">Reset</button>
          <button value="=" onClick={handleClick} data-type="operator" className="btn btn-red col-span-2">=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
