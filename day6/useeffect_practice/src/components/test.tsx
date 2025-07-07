import { useEffect, useState } from 'react';

export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  email: string;
};

export default function Test() {
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

  return (
    <div>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
