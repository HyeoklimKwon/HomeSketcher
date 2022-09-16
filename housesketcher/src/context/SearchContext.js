import { createContext, useState, useContext } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
/* 
page*	integer
title: Page
페이지 번호 0부터 줘야함

main*	string
title: Main
minLength: 1
가구 대분류

sub*	string
title: Sub
minLength: 1
가구 소분류

minPrice	number
title: Minprice
가구 최소 가격. 없으면 null

maxPrice	number
title: Maxprice
가구 최대 가격. 없으면 null

width	number
title: Width
가구 가로 길이

length	number
title: Length
가구 세로 길이

height	number
title: Height
가구 높이

*/
// let BASE_URL = 'http://127.0.0.1:8000/';
const FilterContext = createContext({
  categotyFilters: [],
  subCategorys: [],
  addFilter: (filterName) => {},
  removeFilter: (filterName) => {},
  changePage: (pageNum) => {},
  changeMain: (categoryName) => {},
  changeSub: (categoryName) => {},
  changeMinPrice: (price) => {},
  changeMaxPrice: (price) => {},
  changeWidth: (size) => {},
  changeLength: (size) => {},
  changeHeight: (size) => {},

  getSubCategoryList: (categoryName) => {},
});

export function FilterContextProvider(props) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);

  const [page, setPage] = useState(0);
  const [main, setMain] = useState('Sofas & sectionals'); // 대분류
  const [sub, setSub] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [height, setHeight] = useState(null);

  let { BASE_URL } = useContext(AuthContext);
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );

  const addFilterHandler = (filterName) => {
    setSelectedFilters((prevList) => [...prevList, filterName]);
  };

  function removeFilterHandler(filterName) {
    setSelectedFilters((prevSelectedFilters) => {
      return prevSelectedFilters.filter(
        (categoryFilter) => categoryFilter !== filterName
      );
    });
  }

  function IsSelectedFilterHandler(filterName) {
    return selectedFilters.some((categoryFilter) => categoryFilter === filterName);
  }

  const setPageHandler = (pageNum) => {
    setPage(pageNum);
  };

  const setMainHandler = (categoryName) => {
    console.log('메인 카테고리 변경~~');
    setMain(categoryName);
  };

  const setSubHandler = (categoryName) => {
    setSub(categoryName);
  };

  const setMinPriceHandler = (price) => {
    setMinPrice(price);
  };

  const setMaxPriceHandler = (price) => {
    setMaxPrice(price);
  };

  const setWidthHandler = (size) => {
    setWidth(size);
  };

  const setLengthHandler = (size) => {
    setLength(size);
  };

  const setHeightHandler = (size) => {
    setHeight(size);
  };

  const SubCategoryListHandler = async (categoryName) => {
    await axios
      .get(BASE_URL + `furnitures/filter/main/${categoryName}`, {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
        },
      })
      .then((response) => {
        console.log('리스폰스.data', response.data);
        setSubCategoryList(response.data.subCategories);
        console.log('context/search/subcategorylisthandler 완료', subCategoryList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const context = {
    filters: selectedFilters,
    subCategoryList: subCategoryList,
    addFilter: addFilterHandler,
    removeFilter: removeFilterHandler,
    isSelectedFilter: IsSelectedFilterHandler,
    changePage: setPageHandler,
    changeMain: setMainHandler,
    changeSub: setSubHandler,
    changeMinPrice: setMinPriceHandler,
    changeMaxPrice: setMaxPriceHandler,
    changeWidth: setWidthHandler,
    changeLength: setLengthHandler,
    changeHeight: setHeightHandler,
    getSubCategoryList: SubCategoryListHandler,
  };

  return (
    <FilterContext.Provider value={context}>{props.children}</FilterContext.Provider>
  );
}

export default FilterContext;
