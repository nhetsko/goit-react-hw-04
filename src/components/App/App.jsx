import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";


import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";


export default function App() {

    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (searchQuery === "") {
            return;
        }
        async function getData() {
            try {
                setIsLoading(true);
                setError(false);
                const data = await fetchImages(searchQuery, page);
                setImages((prevImages) => {
                    return [...prevImages, ...data];
                })
                toast.success("HTTP success!");
                
            } catch (error) {
                setError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [page, searchQuery]);

    const handleSearch = (newQuery) => {
        setSearchQuery(newQuery);
        setPage(1);
        setImages([]);
    }

    const handleLoadMore = () => {
    setPage(page + 1);
    };
    
const openModal = (image) => {
  if (!modalIsOpen) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }
};


const closeModal = () => {
  setModalIsOpen(false);
};

    
   return (
    <div className={css.container}>
           <SearchBar onSubmit={handleSearch}  />
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={openModal} />
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
                <ImageModal
                    isOpen={modalIsOpen}
                    onCloseModal={closeModal}
                    image={selectedImage}
                />
            )}
           
      <Toaster position="top-right" />
    </div>
  );
}