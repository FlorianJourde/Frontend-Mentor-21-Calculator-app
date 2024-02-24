import { useState } from 'react'
import Header from './components/Header';
import Display from './components/Display';
import './Calculator.css'
import Keys from './components/Keys';

export default function Calculator() {
  const [total, setTotal] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [typing, setTyping] = useState<string>('0');
  const [showResult, setShowResult] = useState<boolean>(false)
  const keys: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  function handleClick(e: any) {
    const clickedButton = (e.currentTarget as HTMLButtonElement);
    const calculatorFunctionType = clickedButton.getAttribute('data-type')
    const clickedButtonValue = clickedButton.value

    animateButton(clickedButton);
    setShowResult(false);

    switch (calculatorFunctionType) {
      case 'numeric':
        resetIfNoOperator();
        updateValue(clickedButtonValue);
        break;
      case 'operator':
        updateOperation();
        setOperator(clickedButtonValue);
        setTyping('0');
        break;
      case 'delete':
        resetIfNoOperator();
        deleteChar();
        break;
      case 'reset':
        reset();
        break;
      case 'equal':
        updateOperation();
        setOperator('')
        setTyping('0')
        setShowResult(true)
        break;
    }
  };

  function resetIfNoOperator() {
    if (operator === '') reset();
  }

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

  function deleteChar() {
    if (typing.length < 2) {
      setTyping('0');
    } else {
      setTyping(typing.slice(0, -1));
    }
  }

  function updateValue(clickedNumber: any) {
    if (typing.includes('.') && clickedNumber === '.') return;

    if (typing.charAt(0) === '0') {
      setTyping(typing.substring(1).concat('', clickedNumber))
    } else {
      setTyping(typing.concat('', clickedNumber))
    }
  }

  function updateOperation() {
    const resolveCalc = calculate(total, operator, parseFloat(typing))

    if (typing !== '0') {
      if (operator !== '') {
        setTotal(parseFloat(resolveCalc.toFixed(2)))
      } else {
        setTotal(parseFloat(typing))
      }
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

  return (
    <div className="wrapper">
      <div className='calculator pt-5 pb-5 w-full flex flex-col gap-6'>
        <Header />
        <Display
          showResult={showResult}
          total={total}
          operator={operator}
          typing={typing}
        />
        <Keys
          keys={keys}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}
