const filterBySearch = (products, appliedFilters) =>
  appliedFilters.filterBySearch.length > 0
    ? products.filter((item) =>
        item.name
          .toLowerCase()
          .includes(appliedFilters.filterBySearch.toLowerCase())
      )
    : products;

const filterByPriceRange = (products, appliedFilters) =>
  appliedFilters.filterByPriceRange.length > 0
    ? products.filter(({ price }) => price < +appliedFilters.filterByPriceRange)
    : products;

const filterByRating = (products, appliedFilters) =>
  appliedFilters.filterByRating.length > 0
    ? products.filter(({ rating }) => rating > +appliedFilters.filterByRating)
    : products;

const filterByCategories = (products, appliedFilters) =>
  appliedFilters.filterByCategories.length > 0
    ? products.filter(({ category }) =>
        appliedFilters.filterByCategories.some((filter) => filter === category)
      )
    : products;

const sortByPrice = (products, appliedFilters) =>
  !appliedFilters.sortByPrice
    ? products
    : appliedFilters.sortByPrice === "LOW_TO_HIGH"
    ? [...products].sort((a, b) => a.price - b.price)
    : [...products].sort((a, b) => b.price - a.price);

export const getFilteredProducts = (products, appliedFilters) => {
  const filterFunctions = [
    filterBySearch,
    filterByPriceRange,
    filterByCategories,
    filterByRating,
    sortByPrice,
  ];

  return filterFunctions.reduce(
    (acc, func) => func(acc, appliedFilters),
    products
  );
};