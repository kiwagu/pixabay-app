import React, { createContext, useState } from 'react';

export const ImagesContext = createContext(null);

const { Provider } = ImagesContext;

const imagesStore = [];

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState(imagesStore);

  return <Provider value={[images, setImages]}>{children}</Provider>;
};

ImagesProvider.context = ImagesContext;

export default ImagesProvider;
