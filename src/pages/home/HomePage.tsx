import {useState} from 'react'
import {Todo} from 'src/components/Todo'

export const HomePage = () => {
  const [opState, setOpState] = useState('+')
  const a = 60
  const b = 50

  return (
    <main className="text-purple">
      <h1>TODO List</h1>
      <Todo />
      <div>
        <div>
          {a} {opState} {b} = {opState === '+' ? a + b : a - b}
        </div>
        <div>
          <button onClick={() => setOpState('+')}>+</button>
          <button onClick={() => setOpState('-')}>-</button>
        </div>
      </div>
    </main>
  )
}
