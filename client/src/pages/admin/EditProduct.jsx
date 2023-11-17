import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductById } from "../../services/productsService";
import * as yup from "yup";
import { useFormik } from "formik";
import "./addProduct.css";
import { errorMsg, successMsg } from "../../services/feedbackService";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: 0,
    description: "",
    image: "",
    quantityInStock: 0,
  });

  useEffect(() => {
    getProductById(id)
      .then((result) => setProduct(result.data))
      .catch((err) => {
        errorMsg(`Oops. Something went wrong.. ${err}`);
      });
  }, [id]);

  const formik = useFormik({
    initialValues: {
      title: product.title,
      category: product.category,
      price: product.price,
      description: product.description,
      image: product.image,
      quantityInStock: product.quantityInStock,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      title: yup.string().required().min(2).max(41),
      category: yup.string().required(),
      price: yup.number().required(),
      description: yup.string().required().min(6),
      image: yup.string().required(),
      quantityInStock: yup.number().required(),
    }),
    onSubmit: (values) => {
      let product = { ...values, _id: id };
      editProduct(product)
        .then((result) => {
          successMsg(`${result.data.title} Edited`);
          navigate(-1);
        })
        .catch((err) => {
          errorMsg(`Oops. Something went wrong.. ${err}`);
        });
    },
  });

  return (
    <>
      <h1 className="mb-4">
        <span className="mx-5 addProductsTitle">
          Edit Product - {product.title}
        </span>
      </h1>
      <form onSubmit={formik.handleSubmit} className="px-5">
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="productInput"
                id="title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
                <p className="text-danger">{formik.errors.title}</p>
              ) : null}
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="productInput"
                id="price"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors.price ? (
                <p className="text-danger">{formik.errors.price}</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>

              <select
                className="productInput"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  Choose
                </option>
                <option value="Watch">Watch</option>
                <option value="Rings">Rings</option>
                <option value="New Collection">New Collection</option>
                <option value="Bracelets">Bracelets</option>
                <option value="Necklaces">Necklaces</option>
              </select>
              {formik.touched.category && formik.errors.category ? (
                <p className="text-danger">{formik.errors.category}</p>
              ) : null}
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="quantityInStock" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="productInput"
                id="quantityInStock"
                name="quantityInStock"
                value={formik.values.quantityInStock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.quantityInStock &&
              formik.errors.quantityInStock ? (
                <p className="text-danger">{formik.errors.quantityInStock}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            type="text"
            className="textarea"
            placeholder="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            cols="20"
            rows="5"
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <p className="text-danger">{formik.errors.description}</p>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            id="image"
            type="text"
            className="productInput"
            placeholder="image"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <p className="text-danger">{formik.errors.image}</p>
          ) : null}
        </div>

        <div className="d-flex gap-3 mt-4 mb-5">
          <button type="submit" className="signUpBtn">
            Edit Product
          </button>
          <span className="navBtn loginBtn" onClick={() => navigate(-1)}>
            Exit
          </span>
        </div>
      </form>
    </>
  );
}

export default EditProduct;
