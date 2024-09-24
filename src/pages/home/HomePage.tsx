import {Todo} from 'src/components/Todo'
import {UseEvent} from 'src/use/event/UseEvent'

export const HomePage = () => {
  return (
    <main className="text-purple">
      hello home
      <UseEvent />
      <Todo />
    </main>
  )
}
