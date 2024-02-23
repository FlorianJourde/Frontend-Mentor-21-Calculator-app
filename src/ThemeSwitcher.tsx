import './ThemeSwitcher.css'

export default function ThemeSwitcher() {

  const onChange = (e: any) => {
    const clickedRadioButton = e.currentTarget;
    const theme = clickedRadioButton.id;
    const body = document.body;

    body.className = "";
    body.classList.add(theme)
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
          <ul className='switches flex gap-2 [&>li>input]:cursor-pointer [&>li]:flex p-1.5 rounded-3xl'>
            <li>
              <input type="radio" id="classic" name="theme-switcher" onChange={onChange} defaultChecked />
            </li>
            <li>
              <input type="radio" id="retro" name="theme-switcher" onChange={onChange} />
            </li>
            <li>
              <input type="radio" id="synthwave" name="theme-switcher" onChange={onChange} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
