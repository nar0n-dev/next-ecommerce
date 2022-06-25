import { useState } from "react";

type GalleryProductType = {
  images: string[]
}

const Gallery = ({ images }: GalleryProductType) => {
  const [featImage, setFeatImage] = useState(images[0])

  function selectedImage(e: number) {
    setFeatImage(images[e])
  }

  return (
    <section className="product-gallery">
      <div className="product-gallery__thumbs">
        {images.map((image, index) => (
          <div key={index} className="product-gallery__thumb" >
            <img src={image} alt="" onClick={(e) => selectedImage(index)} />
          </div>
        ))}
      </div>

      <div className="product-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
