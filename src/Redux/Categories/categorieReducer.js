import { LOAD_CATEGORIES, SELECT_CATEGORY } from "./CategorieAction/categoriesAction";

const INITIAL_STATE = {
  categories: [],
  selectedCategory: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    case LOAD_CATEGORIES:
        return{
            ...state,
            categories:action.payload
        }
    default:
      return state;
  }
};
