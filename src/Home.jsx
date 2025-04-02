import '../style.css';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  return (
    <div>
      <header>
        <div className="border-b flex flex-row justify-end gap-4 py-2 pr-4">
          <h2 className="text-black font-bold text-xl m-4">Home</h2>
          <h2 className='text-black font-bold text-xl m-4'>Owner</h2>
        </div>
      </header>
    </div>
  )
}



export default Home
