import React from "react";
import './style.css'

export const Search = ({ itemSearch, setter }) => {
  const goSearch = (e)=>{
    e.preventDefault()
  }
  return (
    <div
      className="searchContainer"
    >
      <form
        className="searchForm"
        onSubmit={goSearch}
      >
        <>
          <label htmlFor="search">Buscar</label>
          <input
            type="text"
            name="search"
            placeholder="Buscar producto..."
            className="searchInput"
            defaultValue={itemSearch}
            onChange={(e)=>setter(e.target.value)}
          />
        </>
        <>
          <input
            type="submit"
            value="Buscar"
            className="searchButton"
          />
        </>
      </form>
    </div>
  );
};
