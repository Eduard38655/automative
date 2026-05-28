import { useEffect, useState } from "react";
import styles from "../../styles/Features.module.css";

function ImagesGalery({ selectedVehicle }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Inicializar imágenes cuando selectedVehicle cambia
  useEffect(() => {
    if (selectedVehicle?.vehicle_images && selectedVehicle.vehicle_images.length > 0) {
      setImages(selectedVehicle.vehicle_images);
      setCurrentIndex(0);
    }
  }, [selectedVehicle]);

  // Navegar a la siguiente imagen
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Navegar a la imagen anterior
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Cambiar imagen al hacer click en miniatura
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const primaryImage = images[currentIndex];
  const totalImages = images.length;

  return (
    <div className={styles.ImagesGalery_container}>
      {/* Imagen principal con botones de navegación */}
      <div className={styles.carousel_main_wrapper}>
        {primaryImage && (
          <div className={styles.primary_image_container}>
            <img
              src={primaryImage.image_url}
              alt="Imagen principal del vehículo"
              className={styles.primary_image}
            />
          </div>
        )}

        {/* Botones de navegación */}
        {totalImages > 1 && (
          <>
            <button
              className={styles.carousel_btn_prev}
              onClick={handlePrev}
              aria-label="Imagen anterior"
            >
              ❮
            </button>
            <button
              className={styles.carousel_btn_next}
              onClick={handleNext}
              aria-label="Siguiente imagen"
            >
              ❯
            </button>
          </>
        )}

        {/* Contador de imágenes */}
        <div className={styles.image_counter}>
          {currentIndex + 1} / {totalImages}
        </div>
      </div>

      {/* Miniaturas */}
      {totalImages > 1 && (
        <div className={styles.thumbnails_container}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleThumbnailClick(index);
              }}
            >
              <img
                src={image.image_url}
                alt={`Miniatura ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImagesGalery;