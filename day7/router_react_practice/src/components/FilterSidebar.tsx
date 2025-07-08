import { useEffect, useState } from 'react';
import './FilterSidebar.css';

interface Category {
  id: number;
  name: string;
}

interface FilterSidebarProps {
  selectedCategories: number[];
  onChange: (ids: number[]) => void;
}

export default function FilterSidebar({ selectedCategories, onChange }: FilterSidebarProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleCheckbox = (id: number) => {
    if (selectedCategories.includes(id)) {
      onChange(selectedCategories.filter(cid => cid !== id));
    } else {
      onChange([...selectedCategories, id]);
    }
  };

  return (
    <aside className="filter-sidebar">
      <div className="breadcrumb">Home &gt; Category</div>
      <h3 className="filter-title">Bộ lọc</h3>
      <ul className="filter-list">
        {categories.map(cat => (
          <li key={cat.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => handleCheckbox(cat.id)}
              />
              {cat.name}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}
