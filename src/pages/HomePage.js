import React, { useCallback, useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

import { masonryOptions } from '../consts';
import { getImages } from '../services/images';
import { ImagesContext } from '../context/images';

function HomePage() {
  const [images, setImages] = useContext(ImagesContext);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const getAllImages = useCallback(
    async (pg = 1) => {
      const response = await getImages(page);
      setImages(images.concat(response.data.hits));
      setTotal(response.data.total);
      pg++;
      setPage(pg);
    },
    [images, page, setImages]
  );

  useEffect(() => {
    if (!initialized) {
      getAllImages();
      setInitialized(true);
    }
  }, [initialized, getAllImages]);

  return (
    <div className="page">
      <h1 className="text-center">Home</h1>
      <InfiniteScroll
        pageStart={1}
        loadMore={getAllImages}
        hasMore={total > images.length}
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
            // console.log(i, img.webformatURL.substr(24));

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
  );
}

export default HomePage;
