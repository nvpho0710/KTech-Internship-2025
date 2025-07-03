
import Tintuc from './components/tintuc';
import State02 from './components/state-02';
import State03 from './components/state-03';
import State04 from './components/state-04';
import Phukien from './components/tintuc/phukien'
import Attributes from './components/tintuc/state-01';
const attributes = [
  {id: 1, label: 'Đen'},
  {id: 2, label: 'Hồng'},
  {id: 3, label: 'Xanh'}
]

function App() {

  return (
    <>
      <Tintuc />

      <hr />

      <Phukien />
      <hr />  
      <Attributes data={attributes} />
      <hr /> 

      <State02 />
      <hr />
      <State03 />
      <hr />
      <State04 />
    </>
  )
}

export default App
