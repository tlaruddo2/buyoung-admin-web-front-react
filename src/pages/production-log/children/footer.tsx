export const Footer: React.FC = () => {
    const handleImageDoubleClick = () => {
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
        modal?.showModal();      
    };    

    return (
        <div className="w-full flex justify-between items-center h-15 p-2">
            <div className="join gap-2">
                <button className="btn btn-rounded h-8 min-h-0">선택 삭제</button>
            </div>
            <button 
                    className="btn btn-primary btn-rounded h-8 min-h-0" 
                    onClick={handleImageDoubleClick}
                >
                    <span className="text-xl font-bold">+</span>
            </button>
            <div className="join gap-2">
                <button className="btn btn-rounded h-8 min-h-0">선택 발행</button>
                <button className="btn btn-rounded h-8 min-h-0">엑셀 추출</button>
            </div>       
        </div> 
    )
}
