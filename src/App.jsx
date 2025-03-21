
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples/Examples.jsx';
import CoreConcepts from './components/Cores/CoreConcepts.jsx'; 


function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
