import './App.css'
import ButtonClickCounter from './components/Exercise1'
import InputFieldTracker from './components/Exercise2'
import ToggleSwitch from './components/Exercise3'
import HoverHighlight from './components/Exercise4'
import FormSubmissionAlert from './components/Exercise5'
import KeyPressDisplay from './components/Exercise6'
import DoubleClickMessage from './components/Exercise7'
import DropDownSelection from './components/Exercise8'
import CheckboxToggle from './components/Exercise9'
import SearchFilter from './components/Exercise10'

function App() {

  return (
    <>
      <ButtonClickCounter/>
      <hr />
      <InputFieldTracker/>
      <hr />
      <ToggleSwitch/>
      <hr />
      <HoverHighlight/>
      <hr />
      <FormSubmissionAlert/>
      <hr />
      <KeyPressDisplay/>
      <hr />
      <DoubleClickMessage/>
      <hr />
      <DropDownSelection/>
      <hr />
      <CheckboxToggle/>
      <hr />
      <SearchFilter/>
    </>
  )
}

export default App
