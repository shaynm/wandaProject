import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import PageVisitCounter from "../../components/PageVisitCounter/PageVisitCounter";
import { addToUserCart } from "../../services/cartService";
import { FiCheck, FiX, FiShoppingBag } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { TbInfinity } from "react-icons/tb";
import { TbTruck } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import Magnifier from "react-magnifier";
import { errorMsg, successMsg } from "../../services/feedbackService";
import OtherProducts from "../../components/otherProducts/OtherProducts";
import { useProductService } from "./ProductProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const api = process.env.REACT_APP_API || "";
  const navigate = useNavigate();
  const [products] = useFetch(`${api}products/${id}`);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(0);
  const isLogged = sessionStorage.getItem("token");
  const { setCart, cart } = useProductService();
  const handleAddToCart = (product) => {
    setStock(1);
    product.productId = products._id;
    product.quantity = quantity;
    addToUserCart(product)
      .then(() => {
        setCart((prev) => {
          return [...prev, product];
        });
        successMsg(`${product.title} Added to Bag`);
      })
      .catch((err) => {
        errorMsg(`Oops. something went wrong.. ${err}`);
      });
    cart?.map((prod) => {
      if (prod?.productId === products?._id) {
        setStock((prev) => prev + 1);
      }
      return prod;
    });
  };

  useEffect(() => {
    setStock(0);
    cart?.map((prod) => {
      if (prod?.productId === products?._id) {
        setStock((prev) => prev + 1);
      }
      return prod;
    });
  });

  const stockColors = {
    true: "green",
    false: "red",
  };
  const borderColor =
    stockColors[
      products.quantityInStock > 0 && stock < products?.quantityInStock
    ];

  return (
    <>
      <div className="row">
        {products?.image && (
          <div className="col-lg-6 productImage">
            <div className="magnifier">
              <Magnifier src={products.image} />
            </div>
          </div>
        )}
        <div className="col col-lg-6 col-md-12   productDetails p-3">
          <div className="d-flex justify-content-between ">
            <p style={{ border: `1px solid ${borderColor}` }} className="stock">
              {products?.quantityInStock > 0 &&
              stock < products?.quantityInStock ? (
                <span style={{ color: "green" }}>
                  <FiCheck /> In Stock
                </span>
              ) : (
                <span style={{ color: "red" }}>
                  <FiX /> Out Of Stock
                </span>
              )}
            </p>
          </div>
          <h1>{products.title}</h1>
          <p>{products.description}</p>

          <table className="table">
            <tfoot>
              <tr>
                <th>Category</th>
                <td>{products.category}</td>
              </tr>

              <tr className="table-secondary">
                <th>Stock</th>
                <td>
                  {products.quantityInStock >= 1 ? (
                    <span>
                      Only {products.quantityInStock} units left in stock
                    </span>
                  ) : (
                    <span>Out Of Stock</span>
                  )}
                </td>
              </tr>
              <tr>
                <th>Views</th>
                <td>
                  <span>
                    <PageVisitCounter />
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="d-flex my-4 justify-content-between align-items-center">
            <p className="price">
              Price
              <span>${products.price}</span>
            </p>
            <div>
              {products.quantityInStock < 1 ||
              stock >= products?.quantityInStock ? (
                <button className="orderBtn text-uppercase" disabled>
                  Out Of Stock
                </button>
              ) : isLogged ? (
                <a
                  onClick={() => handleAddToCart(products)}
                  className="orderBtn"
                >
                  <FiShoppingBag /> <span>Add To Bag</span>
                </a>
              ) : (
                <button
                  className="orderBtn text-uppercase"
                  onClick={() => navigate("/login")}
                >
                  Please Login to purchase
                </button>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between gap-3">
            <div className="policy">
              <MdSecurity />
              <span>
                Secured
                <br /> Payments
              </span>
            </div>
            <div className="policy">
              <TbInfinity />
              <span>
                Lifetime <br />
                Warranty
              </span>
            </div>
            <div className="policy">
              <TbTruck />
              <span>
                Fast <br />
                Delivery
              </span>
            </div>
            <div className="policy">
              <RiCustomerService2Line />
              <span>
                24/7 <br />
                Custumer Service
              </span>
            </div>
          </div>
        </div>
        <div className="moreProducts mb-3">
          <h4 className="text-center">You may also like this items</h4>
          <OtherProducts />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
