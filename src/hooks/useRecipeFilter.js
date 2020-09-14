import { useState, useEffect } from 'react';

const useRecipeFilter = () => {
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

  return [categories, areas];
}

export default useRecipeFilter;