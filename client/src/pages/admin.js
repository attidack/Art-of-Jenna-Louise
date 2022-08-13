import React from "react";
import ProductList from "../componenets/ProductList";
import CategoryMenu from "../componenets/CategoryMenu";

const Admin = () => {
    return (
        <div className="container">
            <CategoryMenu />
            <ProductList />
        </div>
    );
}

export default Admin;