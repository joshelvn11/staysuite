"use client";
import React, { useEffect, useState } from "react";

interface GalleryObject {
  image_title: string;
  image_url: string;
  image_type: string;
  image_category: string;
}

interface GalleryProps {
  gallery: GalleryObject[];
}

const AccommodationGallery: React.FC<GalleryProps> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState<GalleryObject[]>(props.gallery);

  const loadImages = async () => {
    // Create an array of promises for every image object
    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.image_url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // Try to resolve all promises and set loaded to true
    try {
      await Promise.all(promises);
      setLoaded(true);
    } catch (error) {
      console.log("Error loading images");
    }
  };

  // Attempt to load the images on mount
  useEffect(() => {
    loadImages();
  }, []);

  return <div>{loaded ? <p>Images loaded</p> : <p>Images not loaded</p>}</div>;
};

export default AccommodationGallery;
