interface ProductionLog {
    order: number;
    startTime: string;
    endTime: string;
    customer: string;
    product: string;
    photo: string;
    color: string;
    platingThickness: string;
    weightQuantity: number;
    thicknesses: number[];
    managerConfirm: string;
    certification: string;
    invoiceIssued: string;
}

interface Props {
    selectedProductionLog: ProductionLog;
}

export const AddDataModal: React.FC<Props> = ({ selectedProductionLog }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("[Debug: production-log/children/add-data-modal.tsx] handleSubmit");
    }
    const handleCancel = () => {
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
        modal?.close();
    }    

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">생산일지 추가 및 수정</h3>
                    <form onSubmit={handleSubmit} className="py-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">주문번호</span>
                            </label>
                            <input type="number" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.order} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">시작 시간</span>
                            </label>
                            <input type="time" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.startTime} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">종료 시간</span>
                            </label>
                            <input type="time" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.endTime} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">고객사</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.customer} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">제품</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.product} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">사진</span>
                            </label>
                            <input type="file" accept="image/*" className="file-input file-input-bordered w-full h-8 min-h-0" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">색상</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.color} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">도금 두께</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.platingThickness} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">중량/수량</span>
                            </label>
                            <input type="number" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.weightQuantity} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">두께 측정값</span>
                            </label>
                            <div className="grid grid-cols-5 gap-2">
                                {[0,1,2,3,4].map((i) => (
                                    <input 
                                        key={i}
                                        type="number" 
                                        step="0.01"
                                        className="input input-bordered h-8 min-h-0" 
                                        defaultValue={selectedProductionLog?.thicknesses[i]} 
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">관리자 확인</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.managerConfirm} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">인증</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.certification} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">거래명세서</span>
                            </label>
                            <input type="text" className="input input-bordered h-8 min-h-0" defaultValue={selectedProductionLog?.invoiceIssued} />
                        </div>

                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary">저장하기</button>
                            <button type="button" className="btn" onClick={handleCancel}>취소</button>
                        </div>
                    </form>
                </div>
            </dialog>     
        </div>

    )
}