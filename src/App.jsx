import './App.css'
import Highlight2 from './Highlight2/Highlight2';
import Higlight from './MultiSelectDropdown/Higlight/Higlight';
import MultiSelectDropdown from './MultiSelectDropdown/MultiSelectDropdown'
import Options from './MultiSelectDropdown/Options/Options';
import Option2 from './Option2/Option2';

function App() {

  const optionstyling = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    maxHeight: '200px',
    overflow: 'auto'
  }

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

  const data2 = [
    {
      id: 1,
      game: 'Pubg'
    },
    {
      id: 2,
      game: 'COD'
    },
    {
      id: 3,
      game: 'Dishonoured'
    },
    {
      id: 5,
      game: 'DMC',
      genre: ['horror', 'adventure']
    },
    {
      id: 6,
      game: 'FIFA',
      genre: ['sports']
    },
    {
      id: 7,
      game: 'GTA VC'
    }
  ];


  return (
    <div className="App">
      <MultiSelectDropdown data={data} label={'Participants'} Option1={Options} Highlight1={Higlight} />
      <hr />
      <MultiSelectDropdown displayLabel='game' optionstyling={optionstyling} data={data2} label={'Games'} Option1={Option2} Highlight1={Highlight2} />
    </div>
  )
}

export default App
