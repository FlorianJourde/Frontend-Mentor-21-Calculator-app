import { useEffect, useState } from 'react'

export default function Calculator() {
  const [total, setTotal] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [typing, setTyping] = useState<string>('0');

  // useEffect(() => { console.log(total); }, [total]);
  // useEffect(() => { console.log(operator); }, [operator]);
  // useEffect(() => { console.log(typing); }, [typing]);

  function reset() {
    setTyping('0');
    setOperator('');
    setTotal(0);
  }

  function animateButton(clickedButton: HTMLButtonElement) {
    clickedButton.classList.add('clicked');
    setTimeout(function () {
      clickedButton.classList.remove("clicked");
    }, 150);
  }

  const handleClick = (e: any) => {
    const clickedButton = (e.currentTarget as HTMLButtonElement);
    const calculatorFunctionType = clickedButton.getAttribute('data-type')
    const clickedButtonValue = clickedButton.value

    animateButton(clickedButton);

    switch (calculatorFunctionType) {
      case 'numeric':
        updateValue(clickedButtonValue);
        break;
      case 'operator':
        updateOperation();
        setOperator(clickedButtonValue);
        setTyping('0');
        break;
      case 'function':
        if (clickedButtonValue === 'Del') {
          setTyping(typing.slice(0, -1));
        } else if (clickedButtonValue === 'Reset') {
          reset();
        }
        else if (clickedButtonValue === '=') {
          updateOperation();
          // updateOperation(true);
          setOperator('')
          setTyping('0')
          // setOperator(clickedButtonValue);
          // setTotal(0);
          // setTyping(total.toString());
        }
        break;
    }
  };

  const updateValue = (clickedNumber: any) => {
    if (typing.includes('.') && clickedNumber === '.') return;

    if (typing.charAt(0) === '0') {
      setTyping(typing.substring(1).concat('', clickedNumber))
    } else {
      setTyping(typing.concat('', clickedNumber))
    }
  }

  function calculate(a: number, str: string, b: number) {
    switch (str) {
      case '+': return a + b
      case '-': return a - b
      case '/': return a / b
      case 'x': return a * b
      default: return 0
    }
  }

  function updateOperation() {
    const resolveCalc = calculate(total, operator, parseFloat(typing))

    if (operator.length > 0 && typing !== '0') {
      setTotal(parseFloat(resolveCalc.toFixed(4)))
      // setTotal(0);
      // setTyping(resolveCalc.toString());
    } else if (typing !== '0') {
      setTotal(parseFloat(typing))
    }
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
          <h3 className={'text-2xl transition-all' + ' ' + (total === 0 ? 'opacity-0 translate-y-2' : 'translate-y-1')}>{total} {operator}</h3>
          <h2 className='text-3xl'>{typing}</h2>
        </div>
        <div className="keyboard bg-[#252d44] p-8 rounded-lg grid grid-cols-4 gap-5">
          <button value="7" onClick={handleClick} data-type="numeric" className="btn">7</button>
          <button value="8" onClick={handleClick} data-type="numeric" className="btn">8</button>
          <button value="9" onClick={handleClick} data-type="numeric" className="btn">9</button>
          <button value="Del" onClick={handleClick} data-type="function" className="btn btn-blue">Del</button>
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
          <button value="x" onClick={handleClick} data-type="operator" className="btn">x</button>
          <button value="Reset" onClick={handleClick} data-type="function" className="btn btn-blue col-span-2">Reset</button>
          <button value="=" onClick={handleClick} data-type="function" className="btn btn-red col-span-2">=</button>
        </div>
      </div>
    </div>
  )
}
