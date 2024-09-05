import { Counter } from "./features/counter/Counter"
import Users from "./features/users/Users"

const App = () => {
  return (
    <div id="app">
      <main className="bg-blue-100 h-screen">
        <Counter />
        <Users />
      </main>
    </div>
  )
}

export default App
