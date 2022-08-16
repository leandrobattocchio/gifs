import { useReducer } from "react";

export const useForm = (initialKeyword, initialRating, initialLanguage) => {
  const ACTIONS = {
    UPDATE_KEYWORD: "update_keyword",
    UPDATE_RATING: "update_rating",
    UPDATE_LANGUAGE: "update_language",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_KEYWORD:
        return {
          ...state,
          keyword: action.payload,
        };
      case ACTIONS.UPDATE_RATING:
        return {
          ...state,
          rating: action.payload,
        };
      case ACTIONS.UPDATE_LANGUAGE:
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };

  function updateKeyword(keyword) {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword });
  }

  function updateRating(rating) {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating });
  }

  function updateLanguage(language) {
    dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: language });
  }

  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rating: initialRating,
    language: initialLanguage,
  });

  const { keyword, rating, language } = state;

  return {keyword, rating, language, updateKeyword, updateRating, updateLanguage};

};
