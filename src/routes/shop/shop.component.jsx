import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { initializeCategoriesData } from '../../store/categories/categories.initializer';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => initializeCategoriesData(dispatch), []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop;