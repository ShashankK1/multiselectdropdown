import './App.css'
import MultiSelectDropdown from './MultiSelectDropdown/MultiSelectDropdown'

function App() {


  const data = [
    {
      id: 1,
      name: 'harry'
    },
    {
      id: 2,
      name: 'leo'
    },
    {
      id: 3,
      name: 'Dean elgar'
    },
    {
      id: 4,
      name: 'Poets',
      members: [2, 3]
    },
    {
      id: 5,
      name: 'jim'
    },
    {
      id: 6,
      name: 'Frontend Devs',
      members: [2, 3, 1]
    },
    {
      id: 7,
      name: 'Backend Devs',
      members: [2]
    }
  ];


  return (
    <div className="App">
      <MultiSelectDropdown data={data} />
    </div>
  )
}

export default App
