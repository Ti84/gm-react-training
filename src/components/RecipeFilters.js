import React from 'react';
import useRecipeFilter from '../hooks/useRecipeFilter';

const RecipeFilters = ({ handleFilter, activeFilter }) => {

  const [categories, areas] = useRecipeFilter();

  return (
    <div>
      <div className="area-options filter-list">
        <h2>Search by area: </h2>
        <ul>
          {areas.map(({ strArea }) => (
            <li key={strArea}>
              <input
                type="button"
                value={strArea}
                data-filter="a"
                onClick={(e) => handleFilter(e)}
                className={
                  activeFilter === strArea ? 'selected-filter' : ''
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="category-options filter-list">
        <h2>Search by category: </h2>
        <ul>
          {categories.map(({ strCategory }) => (
            <li key={strCategory}>
              <input
                type="button"
                value={strCategory}
                data-filter="c"
                onClick={(e) => handleFilter(e)}
                className={
                  activeFilter === strCategory ? 'selected-filter' : ''
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeFilters;
