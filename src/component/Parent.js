import Child from './Child'
import PersianDate from './PersianDate'

const Parent = (props) => {
  return (
    <div className="parent">
      <Child date={props.date} />
      <PersianDate date={props.date} />
    </div>
  )
}

export default Parent
