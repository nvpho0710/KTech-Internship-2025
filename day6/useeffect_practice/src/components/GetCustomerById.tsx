import { useState } from 'react';
import type { Customer } from './test';

export default function GetCustomerById() {
  const [id, setId] = useState('');
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    setCustomer(null);
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`https://server.aptech.io/online-shop/customers/${id}`);
      if (!res.ok) throw new Error('Not found');
      const data = await res.json();
      setCustomer(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{background: '#f8f9fa', borderRadius: 8, padding: 24, maxWidth: 420, margin: '24px auto', boxShadow: '0 2px 8px #0001'}}>
      <h2 style={{textAlign: 'center', color: '#1976d2'}}>Get Customer By ID</h2>
      <form onSubmit={handleFetch} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="get-id">Customer ID</label>
          <input id="get-id" name="id" required placeholder="Customer ID" value={id} onChange={handleIdChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <button type="submit" style={{padding: 10, borderRadius: 4, background: '#1976d2', color: '#fff', border: 'none', fontWeight: 600, marginTop: 8}}>Fetch</button>
      </form>
      {loading && <p style={{textAlign:'center'}}>Loading...</p>}
      {error && <p style={{color:'red', textAlign:'center'}}>{error}</p>}
      {customer && (
        <div style={{marginTop: 16, background: '#fff', borderRadius: 6, padding: 16, boxShadow: '0 1px 4px #0001'}}>
          <p><b>Name:</b> {customer.firstName} {customer.lastName}</p>
          <p><b>Email:</b> {customer.email}</p>
          <p><b>Phone:</b> {customer.phoneNumber}</p>
          <p><b>Address:</b> {customer.address}</p>
          <p><b>Birthday:</b> {customer.birthday}</p>
        </div>
      )}
    </div>
  );
}
