export default function Keys({ keys, handleClick }: any) {
  return (
    <div className="keyboard p-6 md:p-8 rounded-lg">
      {keys.map((key: string) => (
        <button key={key} value={key} onClick={handleClick} data-type="numeric" className="btn">{key}</button>
      ))}
      <button value="delete" onClick={handleClick} data-type="delete" className="btn btn-secondary">Del</button>
      <button value="+" onClick={handleClick} data-type="operator" className="btn">+</button>
      <button value="-" onClick={handleClick} data-type="operator" className="btn">-</button>
      <button value="." onClick={handleClick} data-type="numeric" className="btn">.</button>
      <button value="/" onClick={handleClick} data-type="operator" className="btn">/</button>
      <button value="x" onClick={handleClick} data-type="operator" className="btn">x</button>
      <button value="reset" onClick={handleClick} data-type="reset" className="btn btn-secondary">Reset</button>
      <button value="=" onClick={handleClick} data-type="equal" className="btn btn-tertiary">=</button>
    </div>
  )
}
