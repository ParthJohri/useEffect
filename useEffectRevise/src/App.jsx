import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState("")

  useEffect(()=>{
    async function fetchData() {
      const userdata = await fetch("https://randomuser.me/api/")
      const data = await userdata.json();
      const str = JSON.stringify(data)
      setUser(str);
    }
    fetchData()
  },[])
  // [] - > Dependency List
  return (
    <>
      {/* <button onClick={fetchData}>Fetch Any User</button> */}
      <h1>User Details</h1>
      <p>{user}</p>
    </>
  )
}

export default App
