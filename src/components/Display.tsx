export default function Display({ showResult, total, operator, typing }: any) {
  return (
    <div className={'display flex flex-col text-right p-6 md:p-8 rounded-lg justify-end font-bold' + ' ' + (showResult === true && 'flex-col-reverse')}>
      <h3 className={(total === 0 ? 'opacity-0' : '') + ' ' + (showResult === true ? 'text-4xl' : 'text-2xl')}>{total} {operator}</h3>
      <h2 className={(showResult === true ? 'text-2xl opacity-0' : 'text-4xl')}>{typing}</h2>
    </div>
  )
}
