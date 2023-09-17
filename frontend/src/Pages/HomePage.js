import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import pizzas from "../pizzasData";
import Pizza from "../components/Pizza";
import getAllPizzas from "../actions/pizzaActions";
import pizzaReducers from "../Reducers/pizzaReducers";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";


const HomePage = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => (state) => state.pizzaReducers);
  const { pizzas, error, loading } = pizzaState;
  const [pizzasValue, setPizzaValue] = useState([]);

  const fetchData = async () => {
    await axios.get('https://foodie-pizza-backend-application.onrender.com/getPizzas').then(res=>setPizzaValue(res.data)).then().catch(err=>err)
  };
  useEffect(() => {
    //dispatch(getAllPizzas());
    fetchData();
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong"/>
        ) : (
          pizzasValue.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
