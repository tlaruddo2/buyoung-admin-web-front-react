import { useDeleteProductionRecordsById, useProductionRecordStore } from "@/hooks/production-records";
import toast from "react-hot-toast";

export const Footer: React.FC = () => {
  const { setSelectedRecord, selectedIds, clearSelections } = useProductionRecordStore();
  const { mutate: deleteRecords } = useDeleteProductionRecordsById();

  const handleAddDataClick = () => {
    setSelectedRecord(undefined);
    const modal = document.getElementById('add-data-modal') as HTMLDialogElement;
    modal?.showModal();      
  };    

  const handleDeleteClick = () => {
    if (selectedIds.length === 0) {
        toast.error('삭제할 데이터를 선택해주세요.');
      return;
    }

    deleteRecords(selectedIds, {
      onSuccess: () => {
        toast.success('데이터가 성공적으로 삭제되었습니다.');
        clearSelections();
      },
      onError: () => {
        toast.error('데이터 삭제에 실패했습니다. 다시 시도해주세요.');    
      }
    });
  };

  const handleExportExcelClick = () => { 
    toast.success('엑셀 추출 기능은 아직 준비중입니다.');    
  };

  return (
    <div className="w-full flex justify-between items-center h-15 p-2">
      <div className="join gap-2">
          <button className="btn btn-rounded h-8 min-h-0">버튼추가?</button>
      </div>
      <button 
        className="btn btn-primary btn-rounded h-8 min-h-0" 
        onClick={handleAddDataClick}
      >
        <span className="text-xl font-bold">+</span>
      </button>
      <div className="join gap-2">  
        <button className="btn btn-rounded h-8 min-h-0" onClick={handleDeleteClick}>선택 삭제</button>
        <button className="btn btn-rounded h-8 min-h-0" onClick={handleExportExcelClick}>엑셀 추출</button>
      </div>       
    </div> 
  )
}
