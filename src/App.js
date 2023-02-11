import Parent from './component/Parent'

const App = () => {
  const date = new Date()

  return (
    <div>
      <Parent date={date} />
    </div>
  )
}

export default App
