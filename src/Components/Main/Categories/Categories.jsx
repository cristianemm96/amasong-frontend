import React from "react";
import { CategorieContainer } from "./Categorie_Container/CategorieContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCategories } from "../../../Redux/Categories/CategorieAction/categoriesAction";
import './style.css'
import { server } from "../../../Utils/vars";
import axios from 'axios'

export const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async ()=>{
      try{
        const dataAxios = await axios.get(`${server}/categories`);
      return dataAxios.data
      }
      catch (e){
        console.log(e)
      }
    }
    fetchData()
    .then(res=>dispatch(loadCategories(res)))
  },[]);
  return (
    <div
      className="categoriesContainer"
    >
      {categories.map((p) => (
        <CategorieContainer key={Math.random()} name={p.categorie} />
      ))}
    </div>
  );
};
