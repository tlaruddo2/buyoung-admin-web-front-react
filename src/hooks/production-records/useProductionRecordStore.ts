import { productionRecordsStore } from "@/stores/production-records";
import { ProductionRecord } from "@/types/production";

export const useProductionRecordStore = () => {
  const selectedRecord = productionRecordsStore((state) => state.selectedRecord) as ProductionRecord;
  const setSelectedRecord = productionRecordsStore((state) => state.setSelectedRecord);
  const selectedImage = productionRecordsStore((state) => state.selectedImage);
  const selectedIds = productionRecordsStore((state) => state.selectedIds);
  const toggleSelection = productionRecordsStore((state) => state.toggleSelection);
  const clearSelections = productionRecordsStore((state) => state.clearSelections);

  return { 
    selectedRecord, 
    setSelectedRecord, 
    selectedImage,
    selectedIds,
    toggleSelection,
    clearSelections,
  };  
};