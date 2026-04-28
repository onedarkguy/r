import './App.css'
import UserList from './components/UserList';

function App() {

  return (
    <>
      <UserList users={[
        { name: "John", age: 30, email: "john@gmail.com" },
        { name: "Jane", age: 25, email: "jane@gmail.com" },
        { name: "Bob", age: 35, email: "bob@gmail.com" }
      ]} />
    </>
  )
}

export default App
