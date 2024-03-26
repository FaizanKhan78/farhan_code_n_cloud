import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { HSAccordion } from 'preline';
function App ()
{
  const location = useLocation();

  useEffect( () =>
  {
    HSAccordion.autoInit();
  }, [ location.pathname ] );


  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
