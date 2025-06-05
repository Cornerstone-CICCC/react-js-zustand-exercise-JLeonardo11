import { useUserStore } from './stores/user.store'
import './App.css'

function App() {
  const firstname = useUserStore((state) => state.firstname)
  const setFirstname = useUserStore((state) => state.setFirstname)
  const lastname = useUserStore((state) => state.lastname)
  const age = useUserStore((state) => state.age)

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <div className="space-y-2 mb-6">
        <p><strong>First Name:</strong> {firstname}</p>
        <p><strong>Last Name:</strong> {lastname}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>

      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Update First Name"
      />
    </div>
  )
}

export default App
