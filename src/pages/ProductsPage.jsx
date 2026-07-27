import React, { useState, useMemo } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { productsData, productCategories } from '../data/productsData';
import { Search, Filter, Layers, SlidersHorizontal, PackageX } from 'lucide-react';

export const ProductsPage = () => {
  const { handleOpenInquiry } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'All Products';
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.grades && product.grades.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (category) => {
    if (category === 'All Products') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Page Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/60 text-amber-400 border border-blue-700/60 mb-3">
            <Layers className="w-3.5 h-3.5" /> B2B Product Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Industrial Piping & Steel Products</h1>
          <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl">
            Browse our ready stock of Stainless Steel, Duplex, Alloy Steel, and Nickel piping products manufactured to international standards.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4">
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products by grade (e.g. 316L, 2205, Inconel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-sm font-semibold text-slate-600 self-end md:self-auto">
              Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> products
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 pt-4">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <PackageX className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No matching products found</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              We couldn't find any products matching your current search term "<span className="font-semibold text-slate-900">{searchQuery}</span>". Try adjusting your filter or search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategorySelect('All Products');
              }}
              className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
