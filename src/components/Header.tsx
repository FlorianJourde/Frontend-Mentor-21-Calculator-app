import { useState } from 'react';
import '../styles/Header.css'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<number>(0);

  const onClick = () => {
    const body = document.body;

    switch (theme) {
      case 0:
        setTheme(1);
        body.classList.add('retro');
        break;
      case 1:
        setTheme(2);
        body.className = '';
        body.classList.add('synthwave');
        break;
      case 2:
        setTheme(0);
        body.className = '';
        body.classList.remove();
        break;
    }
  }

  return (
    <div className="header flex gap-5 justify-between items-center">
      <h2 className="logo text-4xl font-bold">calc</h2>
      <div className="flex gap-6 items-end">
        <p className='uppercase text-sm font-semibold tracking-widest mb-2'>Theme</p>
        <div className="theme-selection">
          <ul className='themes flex gap-4 font-semibold tracking-widest justify-center'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <button onClick={onClick} className='switches flex  relative gap-2 [&>li>input]:cursor-pointer [&>li]:flex min-h-7 rounded-3xl w-full before:content-[""] before:height-1 before:h-4 before:w-4 before:top-1/2  before:left-1/2 before:translate-x-[calc(-50%-15px)] before:-translate-y-1/2 before:absolute before:transition-transform before:duration-400'>
          </button>
        </div>
      </div>
    </div>
  )
}
