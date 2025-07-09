
import './App.css'
import FormUI from './components/buil_form'
import SignUpForm from './components/buil_form/SignUpForm'
import LoginForm from './components/buil_form/LoginForm'


function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem', minHeight: '100vh', background: '#f8c6c6' }}>
      <FormUI />
      <SignUpForm />
      <LoginForm />
    </div>
    
  );
}

export default App
