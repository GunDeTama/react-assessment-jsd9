import { useState, useEffect } from "react";
import axios from "axios";
import '../style.css';


export default function Home() {
  const [users , setUsers] = useState([]);
  const [role, setRole] = useState("");
  const [newUser,setNewUser] = useState({ name: "", lastname: "", position: ""})

  useEffect(() => {
    getUsers();

    const interval = setInterval(() => {
      getUsers();
    }, 15000);
  
    return () => clearInterval(interval);
  },[])

  const getUsers = () => {
    axios.get("https://jsd5-mock-backend.onrender.com/members")
    .then(Response => {
      console.log(Response.data);
      setUsers(Response.data);
       })
    .catch(error => console.error("Error get users:" , error));
  }

  const createUsers = () => {

  }

  return (
    <div>
      <header className="bg-gray-200">
        <div className="border-b flex flex-row justify-end gap-4 py-2 pr-4">
          <h2 className="text-black font-bold text-xl m-4">Home</h2>
          <h2 className='text-black font-bold text-xl m-4'>Owner</h2>
        </div>
      </header>

      <main className="bg-gray-200 pb-12">
        <div className='flex flex-col items-center'>

          {/* title */}
          <div className='flex flex-col items-center mt-12'>
            <h2 className='text-4xl font-bold'>Generation Thailand</h2>
            <h2 className='text-4xl font-bold'>React - Assessment</h2>
          </div>

          {/* user admin button */}
          <div className='flex flex-row gap-20 mt-12'>
            <button onClick={() => setRole("user")} className='bg-white p-4 shadow-md font-semibold shadow-neutral-500 rounded-xl cursor-pointer'>User Home Sector</button>
            <button onClick={() => setRole("admin")} className='bg-white p-4 shadow-md font-semibold shadow-neutral-500 rounded-xl cursor-pointer'>Admin Home Sector</button>
          </div>

          {/* create users */}
          {/* <div>
            <h2 className="ml-4 text-2xl font-bold mt-8">Create User Here</h2>
            <div className="flex flex-row gap-4 mt-4">
             <input type="text" placeholder="Name" className="bg-white rounded-md p-4"></input>
             <input type="text" placeholder="LastName" className="bg-white rounded-md p-4"></input>
             <input type="text" placeholder="Position" className="bg-white rounded-md p-4"></input>
             <button className="p-4 bg-blue-300 rounded-md cursor-pointer">Save</button>
            </div>
          </div> */}

        </div>

            {/* members list */}
            {role === "user" && (
              <div className="mx-128 mt-12">
                <div className="grid grid-cols-3 text-center font-bold border-l border-b border-t border-gray-400">
                  <div className="p-2 border-r border-gray-400 bg-gray-200">
                    Name
                  </div>
                  <div className="p-2 border-r border-gray-400 bg-gray-200">
                    Last Name
                  </div>
                  <div className="p-2 border-r border-gray-400 bg-gray-200">
                    Position
                  </div>
              </div>

              { users.length > 0 ? (
              users.map((user) => (
                <div key={user.id} className="grid grid-cols-3  text-center font-bold border-l border-b border-t border-gray-400 bg-white">
                  <div className="p-2 border-r border-gray-400">{user.name}</div>
                  <div className="p-2 border-r border-gray-400">{user.lastname}</div>
                  <div className="p-2 border-r border-gray-400">{user.position}</div>
                </div>
              ))
            ) : (
              <div className="text-center p-4 border border-gray-400">No users available</div>
            )}
            </div>
            )}
      </main>
    </div>
  )
}


