import Link from "next/link";
import { Container, Row, Col, Pagination, Form } from "react-bootstrap";
import styles from "./Products.module.css";
// import Sologan from "../../componnet/Sologan";
import Product from "../components/listProduct/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductsList,
  loadProduct,
} from "../../store/features/Product.slice";
// import "animate.css";
import { Box, FormGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { selectCart } from "../../store/features/cart/cart.slice";
import HeroProducts from "../components/listProduct/HeroProducts";

function Shop({ data = [], filter, url }) {
  const {
    products,
    currentPage,
    totalPage,
    pageChanged,
    filterChanged,
    filtersSort,
    filtersSearch,
    searchByName,
  } = useSelector(selectProductsList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
  }, []);

  const { items } = useSelector(selectCart);
  const [cart, setCart] = React.useState([]);

  const [searchText, setSearchText] = React.useState("");
  const [sort, setSort] = React.useState("");
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchByName(e.target.value.toLowerCase()));
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    dispatch(filtersSort(e.target.value));
  };

  const paginationItems = new Array(totalPage)
    .fill(null)
    .map((value, index) => (
      <Pagination.Item
        key={index}
        active={index === currentPage}
        onClick={() => dispatch(pageChanged(index))}
      >
        {index + 1}
      </Pagination.Item>
    ));

  const router = useRouter();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      // categories: filter.categories,
      // brand: filter.brand,
    },
  });
  const filterRef = React.useRef();
  const sortRef = React.useRef();

  const categories = [
    {
      id: 2,
      label: "Shooter",
      value: "Shooter",
    },
    {
      id: 3,
      label: "mmorpg",
      value: "mmorpg",
    },
    {
      id: 4,
      label: "rpg",
      value: "rpg",
    },
  ];

  return (

    <>
      
      <HeroProducts/>
      
    
    <Container fluid className={styles.page}>
      <section className={styles.mT80}>
        <Container>
          <Row>
            <Col lg={4} className={styles.colLeft}>
              <div className={styles.bgCol}>
                <h1 className={styles.title_search}>Search</h1>
                <div className={styles.input}>
                  <input
                    value={searchText}
                    className={styles.search}
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchTextChange}
                  />
                 
                </div>
                <div className={styles.sort}>
                  <h1 className={styles.title_search}>Sort</h1>
                  <div className={styles.boxSelect}>
                    <select className={styles.select} onChange={handleSort}>
                      <option>Default Sorting</option>
                      <option value="toHigh">Low to High</option>
                      <option value="toLow">High to Low</option>
                    </select>
                    <div className={styles.arrowDown}>
                      <KeyboardArrowDownIcon />
                    </div>
                  </div>
                </div>
                <div className={styles.mT20}>
                  <h1 className={styles.title_search}>Categories</h1>
                  <div className="">
                    <Form
                      onChange={() => {
                        const filter = [];
                        console.log(filter);
                        filterRef.current.elements.filter.forEach(
                          (checkbox) => {
                            if (checkbox.checked) filter.push(checkbox.value);
                          }
                        );

                        dispatch(filterChanged(filter));
                      }}
                      ref={filterRef}
                    >
                      <Box mb="2rem">
                        <FormGroup className={styles.checkbox}>
                          {categories.map((categories) => {
                            return (
                              <Form.Check
                                name="filter"
                                type="checkbox"
                                key={categories.id}
                                label={categories.label}
                                value={categories.value}
                                className={styles.content}
                              />
                            );
                          })}
                        </FormGroup>
                      </Box>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                {products.map((product, index) => (
                  <Col lg={4} key={index} className={styles.product}>
                    <Link
                        className={styles.view}
                        href={{
                          pathname: "/products/[gid]",
                          query: { gid: product.id },
                        }}
                      >
                      <div className='m-2 position-relative'>
                            <img src={product.image} alt="" className={styles.image} />
                            <div className='m-2'>
                              <div className={styles.price_sale}>
                              <div className={styles.name_sale}>{product.name}</div>
                                <div className='d-flex ps-2 pb-2 pe-3'>
                                  <div className={styles.name}>-{product.sale}%</div>
                                  <div className={styles.price_vnd}>
                                    <div className={styles.price_save}>{product.price}</div>
                                    <div>₫ {product.price_sale}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                      
                      </Link>
                  </Col>
                ))}
              </Row>
              <Pagination className={styles.pagination}>
                {paginationItems}
              </Pagination>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
    </>
  );
}

export default Shop;