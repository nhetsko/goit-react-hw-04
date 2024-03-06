import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={css.list}>
     {images.map((image) => (
  <li className={css.item} key={image.id}>
    <ImageCard
      src={image.urls.small}
      alt={image.slug}
      onClick={() => onOpenModal(image)}
    />
  </li>
))}
    </ul>
  );
}
