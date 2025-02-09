interface Props {
    selectedImage: string;
}
export const ImageModal: React.FC<Props> = ({ selectedImage }) => {
    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form method="dialog" className="modal-backdrop">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                </form>
                <img 
                    src={selectedImage} 
                    alt="product" 
                    className="w-40 h-40 mx-auto" 
                />                  
            </div>
        </dialog>    
    )
}