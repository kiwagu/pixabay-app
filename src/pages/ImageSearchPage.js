import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-component';
import { masonryOptions } from '../consts';
import { searchImages } from '../services/images';
import { Link } from 'react-router-dom';
import { ImagesContext } from '../context/images';

const schema = yup.object({
  keyword: yup.string().required('Keyword is required'),
});

function ImageSearchPage() {
  const [images, setImages] = useContext(ImagesContext);
  const [keyword, setKeyword] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searching, setSearching] = useState(false);

  const handleSubmit = async (evt) => {
    const isValid = await schema.validate(evt);
    if (!isValid) {
      return;
    }
    setKeyword(evt?.keyword);
    searchAllImages(evt?.keyword, 1);
  };

  const searchAllImages = async (keyword, pg = 1) => {
    setSearching(true);
    const response = await searchImages(keyword, page);
    let imgs = response.data.hits;
    setImages(imgs);
    setTotal(response.data.total);
    setPage(pg);
  };

  const getMoreImages = async () => {
    let pg = page;
    pg++;
    const response = await searchImages(keyword, pg);
    setImages(images.concat(response.data.hits));
    setTotal(response.data.total);
    setPage(pg);
  };

  return (
    <div className="page container">
      <div className="row text-center">
        <div className="col-10 mx-auto">
          <h1 className="text-center">Search</h1>
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{ keyword: '' }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row style={{ margin: 0 }}>
                  <Form.Group as={Col} md="12" controlId="keyword">
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control
                      type="text"
                      name="keyword"
                      placeholder="Keyword"
                      value={values.keyword || ''}
                      onChange={handleChange}
                      isInvalid={touched.keyword && errors.keyword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.keyword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Button type="submit">Search</Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <br />
          <InfiniteScroll
            pageStart={1}
            loadMore={getMoreImages}
            hasMore={searching && total > images.length}
          >
            <Masonry
              className={'grid'}
              elementType={'div'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              {/* .grid-sizer empty element, only used for element sizing */}
              <div className="grid-sizer"></div>
              {images.map((img, i) => {
                return (
                  <div key={i}>
                    <Link to={`/image/${img.id}`}>
                      <img
                        src={img.webformatURL}
                        alt="thumbnamil"
                        className="card grid-item"
                      />
                    </Link>
                  </div>
                );
              })}
            </Masonry>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default ImageSearchPage;
