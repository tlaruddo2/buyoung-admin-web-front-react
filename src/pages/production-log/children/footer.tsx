export const Footer: React.FC = () => {
    return (
        <div className="w-full flex justify-between items-center h-15 p-2">
            <div className="join gap-2">
                <button className="btn btn-rounded h-8 min-h-0">선택 삭제</button>
            </div>
            <button 
                    className="btn btn-primary btn-rounded h-8 min-h-0" 
                    // onClick={}
                >
                    <span className="text-xl font-bold">+</span>
            </button>
            <div className="join gap-2">
                <button className="btn btn-rounded h-8 min-h-0">선택 발행</button>
                <button className="btn btn-rounded h-8 min-h-0">엑셀 추출</button>
            </div>
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">생산일지 추가 / 수정</h3>
                <p className="py-4">생산일지 내용 어기 들어감, 관리자만 가능?</p>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn">저장하기</button>
                </form>
                </div>
            </div>
            </dialog>            
        </div> 
    )
}
