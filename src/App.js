import Parent from './component/Parent'

const App = () => {
  document.title = 'Current Date'

  const date = new Date()

  return (
    <div>
      <Parent date={date} />
    </div>
  )
}

export default App
