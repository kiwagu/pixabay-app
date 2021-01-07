import React, { useContext, useEffect, useState } from 'react';
import { ImagesContext } from '../context/images';
import { getImageById } from '../services/images';

import './ImagePage.css';

const notFoundImageUrl =
  'https://pixabay.com/get/50e8dd4a4c57b10ff3d8992cc621317b143bd8e44e5077497c267fd0934ec3_640.png';

function ImagePage({ match }) {
  const [images] = useContext(ImagesContext);
  const { imageId } = match.params;
  let [image, setImage] = useState(
    images.find((image) => String(image.id) === imageId)
  );
  useEffect(() => {
    (async () => {
      if (!image) {
        try {
          const serverResponse = await getImageById(imageId);
          const {
            data: { hits: images },
          } = serverResponse;
          setImage(images[0]);
        } catch (_) {
          setImage({
            largeImageURL: notFoundImageUrl,
            tags: 'Not found',
          });
        }
      }
      console.log('image', image);
    })();
  });
  const details = image && (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="photo-img">
            <img src={image.largeImageURL} alt="photography" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="photo-details">
            <p>
              <i
                className="fas fa-file-alt fa-fw"
                data-toggle="tooltip"
                data-placement="top"
                title="Bio"
              />
              Tags: {image.tags}
            </p>
            <ul>
              <li>
                <i
                  className="far fa-user fa-fw"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="User"
                />
                {image.user}
              </li>
              <li>
                <i
                  className="far fa-thumbs-up fa-fw"
                  data-placement="top"
                  title="Likes"
                />
                {image.likes}
              </li>
              <li>
                <i
                  className="far fa-eye fa-fw"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Views"
                />
                {image.views}
              </li>
              <li>
                <i
                  className="fas fa-download fa-fw"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Download"
                />
                {image.downloads}
              </li>
              <li>
                <i
                  className="fas fa-arrows-alt fa-fw"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Original size"
                />
                {image.webformatHeight}x{image.webformatWidth} pixel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 className="text-center">Image details</h1>
      {/* {image && <img src={image.largeImageURL} alt={image.tags} />} */}
      {details}
    </div>
  );
}

export default ImagePage;
