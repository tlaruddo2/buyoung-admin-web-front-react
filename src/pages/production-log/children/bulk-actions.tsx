// import { productionRecordsStore } from '@/store/production';
// import { useDeleteProductionRecordsById } from '@/hooks/production-records/useProductionRecord';

// export const BulkActions: React.FC = () => {
//   const { selectedIds, clearSelections } = useProductionRecordsStore();
//   const { mutate: deleteRecords, isPending } = useDeleteProductionRecordsById();

//   if (selectedIds.length === 0) return null;

//   const handleDelete = () => {
//     if (window.confirm(`${selectedIds.length}개의 항목을 삭제하시겠습니까?`)) {
//       deleteRecords(selectedIds, {
//         onSuccess: () => {
//           clearSelections();
//         }
//       });
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 flex gap-2">
//       <button 
//         className="btn btn-error"
//         onClick={handleDelete}
//         disabled={isPending}
//       >
//         {isPending ? '삭제 중...' : `선택된 ${selectedIds.length}개 삭제`}
//       </button>
//       <button 
//         className="btn btn-ghost"
//         onClick={clearSelections}
//       >
//         선택 해제
//       </button>
//     </div>
//   );
// }; 