import { useState } from 'react';
import type { Customer } from './test';

export default function CreateCustomer() {
  const [form, setForm] = useState<Omit<Customer, 'id'>>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    birthday: '',
    email: '',
  });
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setError(null);
    try {
      const res = await fetch('https://server.aptech.io/online-shop/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Create failed');
      setResult('Customer created successfully!');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div style={{background: '#f8f9fa', borderRadius: 8, padding: 24, maxWidth: 420, margin: '24px auto', boxShadow: '0 2px 8px #0001'}}>
      <h2 style={{textAlign: 'center', color: '#1976d2'}}>Create Customer</h2>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" required placeholder="First Name" value={form.firstName} onChange={handleChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" required placeholder="Last Name" value={form.lastName} onChange={handleChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input id="phoneNumber" name="phoneNumber" required type="tel" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="address">Address</label>
          <input id="address" name="address" required placeholder="Address" value={form.address} onChange={handleChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="birthday">Birthday</label>
          <input id="birthday" name="birthday" required type="date" placeholder="Birthday" value={form.birthday} onChange={handleChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" required type="email" placeholder="Email" value={form.email} onChange={handleChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <button type="submit" style={{padding: 10, borderRadius: 4, background: '#1976d2', color: '#fff', border: 'none', fontWeight: 600, marginTop: 8}}>Create</button>
      </form>
      {result && <p style={{color:'green', textAlign:'center', marginTop: 12}}>{result}</p>}
      {error && <p style={{color:'red', textAlign:'center', marginTop: 12}}>{error}</p>}
    </div>
  );
}
