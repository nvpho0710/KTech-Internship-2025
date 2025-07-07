import { useState } from 'react';

export default function DeleteCustomer() {
  const [id, setId] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setError(null);
    try {
      const res = await fetch(`https://server.aptech.io/online-shop/customers/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete failed');
      setResult('Customer deleted successfully!');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div style={{background: '#f8f9fa', borderRadius: 8, padding: 24, maxWidth: 420, margin: '24px auto', boxShadow: '0 2px 8px #0001'}}>
      <h2 style={{textAlign: 'center', color: '#2f4dd3'}}>Delete Customer</h2>
      <form onSubmit={handleDelete} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label htmlFor="delete-id">Customer ID</label>
          <input id="delete-id" name="id" required placeholder="Customer ID" value={id} onChange={handleIdChange} style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
        </div>
        <button type="submit" style={{padding: 10, borderRadius: 4, background: '#030eee', color: '#fff', border: 'none', fontWeight: 600, marginTop: 8}}>Delete</button>
      </form>
      {result && <p style={{color:'green', textAlign:'center', marginTop: 12}}>{result}</p>}
      {error && <p style={{color:'red', textAlign:'center', marginTop: 12}}>{error}</p>}
    </div>
  );
}
