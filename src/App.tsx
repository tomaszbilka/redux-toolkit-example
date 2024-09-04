import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import Users from "./features/users/Users"

const App = () => {
  return (
    <div id="app">
      <Counter />
      <Quotes />
      <Users />
    </div>
  )
}

export default App
