const filterBySearch = (products, filtersApplied) =>
  filtersApplied?.filterBySearch?.length > 0
    ? products?.filter((book) =>
        book?.title
          ?.toLowerCase()
          ?.includes(filtersApplied?.filterBySearch?.toLowerCase())
      )
    : products;

const filterByPriceRange = (products, filtersApplied) =>
  filtersApplied?.filterByPriceRange?.length > 0
    ? products?.filter(({ originalPrice, discountPrice }) => (originalPrice - discountPrice) < +filtersApplied?.filterByPriceRange)
    : products;

const filterByRating = (products, filtersApplied) =>
  filtersApplied?.filterByRating?.length > 0
    ? products?.filter(({ totalStars }) => totalStars > +filtersApplied?.filterByRating)
    : products;

const filterByCategories = (products, filtersApplied) =>
  filtersApplied?.filterByCategories?.length > 0
    ? products?.filter(({ genres }) =>
        filtersApplied?.filterByCategories?.some((category) => genres.includes(category))
      )
    : products;

const sortByPrice = (products, filtersApplied) =>
  !filtersApplied?.sortByPrice
    ? products
    : filtersApplied?.sortByPrice === "LOW_TO_HIGH"
    ? [...products]?.sort((a, b) => a?.originalPrice - a?.discountPrice -(b?.originalPrice - b?.discountPrice))
    : [...products]?.sort((a, b) => b?.originalPrice - b?.discountPrice - (a?.originalPrice - a?.discountPrice));

export const getFilteredProducts = (products, filtersApplied) => {
  const filterFunctions = [
    filterBySearch,
    filterByPriceRange,
    filterByCategories,
    filterByRating,
    sortByPrice,
  ];

  return filterFunctions?.reduce(
    (acc, func) => func(acc, filtersApplied),
    products
  );
};