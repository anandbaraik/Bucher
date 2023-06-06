const filterBySearch = (products, appliedFilters) =>
  appliedFilters?.filterBySearch?.length > 0
    ? products?.filter((book) =>
        book?.title
          ?.toLowerCase()
          ?.includes(appliedFilters?.filterBySearch?.toLowerCase())
      )
    : products;

const filterByPriceRange = (products, appliedFilters) =>
  appliedFilters?.filterByPriceRange?.length > 0
    ? products?.filter(({ originalPrice, discountPrice }) => (originalPrice - discountPrice) < +appliedFilters?.filterByPriceRange)
    : products;

const filterByRating = (products, appliedFilters) =>
  appliedFilters?.filterByRating?.length > 0
    ? products?.filter(({ totalStars }) => totalStars > +appliedFilters?.filterByRating)
    : products;

const filterByCategories = (products, appliedFilters) =>
  appliedFilters?.filterByCategories?.length > 0
    ? products?.filter(({ genres }) =>
        appliedFilters?.filterByCategories?.some((category) => genres.includes(category))
      )
    : products;

const sortByPrice = (products, appliedFilters) =>
  !appliedFilters?.sortByPrice
    ? products
    : appliedFilters?.sortByPrice === "LOW_TO_HIGH"
    ? [...products]?.sort((a, b) => a?.originalPrice - a?.discountPrice -(b?.originalPrice - b?.discountPrice))
    : [...products]?.sort((a, b) => b?.originalPrice - b?.discountPrice - (a?.originalPrice - a?.discountPrice));

export const getFilteredProducts = (products, appliedFilters) => {
  const filterFunctions = [
    filterBySearch,
    filterByPriceRange,
    filterByCategories,
    filterByRating,
    sortByPrice,
  ];

  return filterFunctions?.reduce(
    (acc, func) => func(acc, appliedFilters),
    products
  );
};