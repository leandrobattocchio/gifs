import React from "react";
import { useNavigate } from "react-router";
import { RatingAndLanguages } from "constants/RatingAndLanguages";
import { useForm } from "hooks/useForm";
import './buscador.css'

export const Buscador = ({initialKeyword, initialRating = 'g', initialLanguage = 'en'}) => {
  const navigate = useNavigate();

  const {keyword, rating, language, updateKeyword, updateRating, updateLanguage} = useForm(initialKeyword, initialRating, initialLanguage);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${keyword}/${rating}/${language}`);
  };

  function handleChangeKeyword(e) {
    updateKeyword(e.target.value);
  };

  function handleChangeRating(e) {
    updateRating(e.target.value);
  };

  function handleChangeLanguages(e) {
   updateLanguage(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ marginLeft:"20%", marginTop:"2%", padding: "20px", display: "inline-flex", width: "60%"}}
        role="search"
      >
        <input required type="text" placeholder="Search..." aria-label="Search" className="form-control" onChange={handleChangeKeyword} value={keyword}/>

        <select onChange={handleChangeRating} value={rating} className='selector'>
          {RatingAndLanguages.RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>

        <select onChange={handleChangeLanguages} value={language} className='selector'>
          {RatingAndLanguages.LANGUAGES.map((languages) => (
            <option key={languages}>{languages}</option>
          ))}
        </select>
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};
