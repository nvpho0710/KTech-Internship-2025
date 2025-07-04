 /**
 * Components
 */
import Session02 from './Homeworks/Session02'
/**
 * fontawesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css';
/* Thêm thư viện fontawesome */
library.add(fas,far, fab);

function App() {
  
  
  return (
    <div className="App" >
      <h1 className='h1'>Homework Session2</h1>
      <Session02 />
    </div>
  );
}

export default App;
