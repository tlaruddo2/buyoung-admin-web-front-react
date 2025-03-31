import { useEffect } from "react";

interface Props {
  selectedImage: string | null;
}
export const ImageModal: React.FC<Props> = ({ selectedImage }) => {
  useEffect(() => {
    const modal = document.getElementById('image-modal') as HTMLDialogElement;
    if (selectedImage) {
      modal?.showModal();
    } else {
      modal?.close();
    }
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <dialog id="image-modal" className="modal">
      <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black" onClick={() => {
            const modal = document.getElementById('image-modal') as HTMLDialogElement;
            modal?.close();
        }}>✕</button>
        <img 
          src={selectedImage} 
          alt="product" 
          className="w-40 h-40 mx-auto" 
        />                  
      </div>
    </dialog>    
  )
}