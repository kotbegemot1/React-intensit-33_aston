import './App.css';

import FormComp from '../FormComp/FormComp'

function App() {

  const time = new Date().getHours()
  
  console.log(typeof(time));

  return (
    <div className="App">
      <FormComp 
      now = {time}
      />
    </div>
  );
}

export default App;
