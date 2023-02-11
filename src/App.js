import CurrentDate from './component/CurrentDate'
import PersianDate from './component/PersianDate'

const App = () => {
  document.title = 'Current Date'

  const date = new Date()

  return (
    <div className="parent">
      <CurrentDate date={date} />
      <PersianDate date={date} />
    </div>
  )
}

export default App
