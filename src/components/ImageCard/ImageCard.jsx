import css from './ImageGallery.module.css';

export default function ImageCard({ src, alt, onClick }) {
    return (
        <div className={css.container}>
        <img className={ css.card} src={src} alt={alt} onClick={onClick}/>
</div>
)
}