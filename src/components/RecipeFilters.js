import React, { useEffect, useState } from 'react';

const RecipeFilters = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchUrls = [
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    ];

    const fetchFilterData = async () => {
      const data = await Promise.all(fetchUrls.map((url) => fetch(url)));
      const json = await Promise.all(data.map((res) => res.json()));
      const [categories, areas] = json;
      setCategories(categories && categories.meals);
      setAreas(areas && areas.meals);
    };

    fetchFilterData();
  }, []);

  return (
    <div>
      <div className="area-options filter-list">
        <h2>Search by area: </h2>
        <ul>
          {areas.map(({ strArea }) => (
            <li key={strArea}>
              <input type="button" value={strArea} />
            </li>
          ))}
        </ul>
      </div>
      <div className="category-options filter-list">
        <h2>Search by category: </h2>
        <ul>
          {categories.map(({ strCategory }) => (
            <li key={strCategory}>
              <input type="button" value={strCategory} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeFilters;
