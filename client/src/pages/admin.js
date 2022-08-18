import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";

const Admin = () => {
    const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);
    const productList = data?.products || {}
    console.log(productList)
    if (loading) {
        return <h2>loading</h2>
    }
    return (
      <div className="container">
        admin page
        {productList?.map((product) => {
            return (
                <div>
            <h1>{product.name}</h1>

                </div>
            )
        })}
      </div>
    );
  };
  
  export default Admin;
  