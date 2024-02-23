import { useEffect, useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher';

export default function Calculator() {
  const [total, setTotal] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [typing, setTyping] = useState<string>('0');
  const [showResult, setShowResult] = useState<boolean>(false)
  const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

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
    setShowResult(false);

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
          setOperator('')
          setTyping('0')
          setShowResult(true)
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
      setTotal(parseFloat(resolveCalc.toFixed(2)))
    } else if (typing !== '0') {
      setTotal(parseFloat(typing))
    }
  }

  return (
    <div className="wrapper">
      <div className='calculator w-full flex flex-col gap-8'>

        <ThemeSwitcher/>

        <div className={'display flex flex-col text-right p-8 rounded-lg justify-end bg-[#181f32] text-white font-bold' + ' ' + (showResult === true && 'flex-col-reverse')}>
          <h3 className={(total === 0 ? 'opacity-0' : '') + ' ' + (showResult === true ? 'text-4xl' : 'text-2xl')}>{total} {operator}</h3>
          <h2 className={(showResult === true ? 'text-2xl opacity-0' : 'text-4xl')}>{typing}</h2>
        </div>

        {/* <div className="keyboard bg-[#252d44] p-8 rounded-lg grid grid-cols-4 gap-5"> */}

        <div className="keyboard bg-[#252d44] p-8 rounded-lg">

          {keys.map((key) => (
            <button key={key} value={key} onClick={handleClick} data-type="numeric" className="btn">{key}</button>
          ))}

          <button value="Del" onClick={handleClick} data-type="function" className="btn btn-blue">Del</button>
          <button value="+" onClick={handleClick} data-type="operator" className="btn">+</button>
          <button value="-" onClick={handleClick} data-type="operator" className="btn">-</button>
          <button value="." onClick={handleClick} data-type="numeric" className="btn">.</button>
          <button value="/" onClick={handleClick} data-type="operator" className="btn">/</button>
          <button value="x" onClick={handleClick} data-type="operator" className="btn">x</button>
          <button value="Reset" onClick={handleClick} data-type="function" className="btn btn-blue">Reset</button>
          <button value="=" onClick={handleClick} data-type="function" className="btn btn-red">=</button>
        </div>
      </div>
    </div>
  )
}
