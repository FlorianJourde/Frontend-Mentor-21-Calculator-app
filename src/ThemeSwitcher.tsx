import React, { ChangeEventHandler, useState } from 'react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>('classic')

  const onChange = (e: any) => {
    const { name } = e.target;
    // console.log(e);
    const clickedRadioButton = e.currentTarget;
    const theme = clickedRadioButton.id;
    console.log(clickedRadioButton);
    console.log(theme);
    // console.log(name);

  }

  return (
    <div className="header flex gap-5 justify-between items-center">
      <h2 className="logo text-4xl font-bold text-white">calc</h2>
      <div className="flex gap-6 items-end">
        <p className='uppercase text-sm text-white font-semibold tracking-widest mb-2'>Theme</p>
        <div className="theme-selection">
          <ul className='themes flex gap-4 text-white font-semibold tracking-widest justify-center'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <ul className='switches flex gap-2 [&>li>input]:cursor-pointer [&>li]:flex bg-[#252d44] p-1.5 rounded-3xl'>
            <li>
              <input type="radio" id="classic-theme" name="theme-switcher" onChange={onChange} />
              {/* <label htmlFor="classic-theme">Classic</label> */}
            </li>
            <li>
              <input type="radio" id="synthwave-theme" name="theme-switcher" onChange={onChange} />
              {/* <label htmlFor="synthwave-theme">Synthwave</label> */}
            </li>
            <li>
              <input type="radio" id="retro-theme" name="theme-switcher" onChange={onChange} />
              {/* <label htmlFor="retro-theme">Retro</label> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
