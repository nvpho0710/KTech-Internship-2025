
import './App.css'
import UserForm from './components/UserForm'
import { UserProvider } from './components/UserProvider';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
function App() {
  return (
    <UserProvider>
      <Router>
        <nav style={{ display: 'flex', gap: 16, margin: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <UserForm />
              <UserList />
            </>
          } />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App
