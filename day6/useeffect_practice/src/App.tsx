// import Test from './components/test';
import ListCustomers from './components/ListCustomers';
import CreateCustomer from './components/CreateCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import GetCustomerById from './components/GetCustomerById';
import './App.css'
function App() {
  return (
    <div>
      {/* <Test /> */}
      <ListCustomers/>
      <hr />
      <CreateCustomer/>
      <hr />
      <DeleteCustomer/>
      <hr />
      <UpdateCustomer/>
      <hr />
      <GetCustomerById/>
    </div>
  );
}

export default App
