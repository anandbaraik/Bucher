import { createContext, useContext, useReducer } from "react";
import { initialState, filterReducer } from "../reducer/FilterReducer";

const FilterContext = createContext({
    filtersApplied: {},
    filterDispatch: () => {}
});

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider
      value={{
        filtersApplied: state,
        filterDispatch: dispatch
    }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

export default FilterProvider;