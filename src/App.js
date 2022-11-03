
import { ColorModeContext, useMode } from './Theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css';
import Topbar from './scenes/global/Topbar/Topbar';
import Dashboard from './scenes/dashboard';
import Asidebar from './scenes/global/Sidebar/Sidebar';

import Team from './scenes/Team/team';
import Invoices from './scenes/Invoices/Invoices';
import Contacts  from './scenes/Contacts/Contacts';
// import Bar from './scenes/Chart/bar';
// import Line from './scenes/Chart/line';
// import Pie from './scenes/Chart/pie';
import Form from './scenes/Forms/Form';
// import FAQ from './scenes/Faq/faq';
// import Geography from './scenes/Chart/geography';
// import Calendar from './scenes/Calendar/calendar';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [theme, colorMode] = useMode();



  return (

    <ColorModeContext.Provider value={colorMode}>
      
      <ThemeProvider theme={theme}>
        <CssBaseline/>  
        <div className="app">
          <Asidebar/>
          <div className='content'>
               <Topbar/>
               <Routes>
                  <Route path='/' element={<Dashboard/>} />
                  <Route path='/team' element={<Team/>} />
                  <Route path='/contacts' element={<Contacts/>} />
                  {/* <Route path='/bar' element={<Bar/>} /> */}
                  {/* <Route path='/line' element={<Line/>} /> */}
                  {/* <Route path='/pie' element={<Pie/>} /> */}
                  <Route path='/form' element={<Form/>} />
                  {/* <Route path='/faq' element={<FAQ/>} /> */}
                  {/* <Route path='/geography' element={<Geography/>} /> */}
                  <Route path='/invoices' element={<Invoices/>} />
                  {/* <Route path='/calendar' element={<Calendar/>} /> */}
               </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
 
export default App;
