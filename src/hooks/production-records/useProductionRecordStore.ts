import { productionRecordsStore } from "@/stores/production-records";
import { ProductionRecord } from "@/types/production";

export const useProductionRecordStore = () => {
  const selectedRecord = productionRecordsStore((state) => state.selectedRecord) as ProductionRecord;
  const setSelectedRecord = productionRecordsStore((state) => state.setSelectedRecord);
  const selectedImage = productionRecordsStore((state) => state.selectedImage);
  const selectedIds = productionRecordsStore((state) => state.selectedIds);
  const filteredRecords = productionRecordsStore((state) => state.filteredRecords);
  const selectedDate = productionRecordsStore((state) => state.selectedDate);
  const selectedProductionLine = productionRecordsStore((state) => state.selectedProductionLine);
  const selectedInvoiceOpt = productionRecordsStore((state) => state.selectedInvoiceOpt);
  
  // Actions
  const setSelectedDate = productionRecordsStore((state) => state.setSelectedDate);
  const setSelectedProductionLine = productionRecordsStore((state) => state.setSelectedProductionLine);
  const setSelectedInvoiceOpt = productionRecordsStore((state) => state.setSelectedInvoiceOpt);
  const filterRecords = productionRecordsStore((state) => state.filterRecords);
  const toggleSelection = productionRecordsStore((state) => state.toggleSelection);
  const clearSelections = productionRecordsStore((state) => state.clearSelections);

  return { 
    selectedRecord, 
    setSelectedRecord, 
    selectedImage,
    selectedIds,
    filteredRecords,
    selectedDate,
    selectedProductionLine,
    selectedInvoiceOpt,
    setSelectedDate,
    setSelectedProductionLine,
    setSelectedInvoiceOpt,
    filterRecords,
    toggleSelection,
    clearSelections,
  };  
};