export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const loadCategories = (categories)=>({
  type:LOAD_CATEGORIES,
  payload:categories
})