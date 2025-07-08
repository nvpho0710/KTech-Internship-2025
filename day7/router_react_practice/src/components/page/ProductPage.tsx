

import { useState } from 'react';
import FilterSidebar from '../FilterSidebar';
import ProductGrid from '../ProductGrid';

export default function ProductPage() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', padding: '2rem' }}>
      <FilterSidebar
        selectedCategories={selectedCategories}
        onChange={setSelectedCategories}
      />
      <div style={{ flex: 1, marginLeft: '2rem' }}>
        <ProductGrid categoryIds={selectedCategories} />
      </div>
    </div>
  );
}
