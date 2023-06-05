import { createContext, useContext, useReducer } from "react";
import { initialState, filterReducer } from "../reducer/FilterReducer";

const FilterContext = createContext({
    appliedFilters: {},
    filterDispatch: () => {}
});

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider
      value={{
        appliedFilters: state,
        filterDispatch: dispatch
    }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

export default FilterProvider;