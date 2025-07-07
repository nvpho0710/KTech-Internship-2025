import { useEffect, useState } from 'react';
import type { Customer } from './test';

export default function ListCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://server.aptech.io/online-shop/customers')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this customer?')) return;
    try {
      const res = await fetch(`https://server.aptech.io/online-shop/customers/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setCustomers((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <div>
      <h2>List Customers</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <table border={1} cellPadding={4} style={{borderCollapse:'collapse', width:'100%'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Birthday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.address}</td>
              <td>{customer.birthday}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)} style={{padding: '4px 10px', borderRadius: 4, background: '#d32f2f', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
