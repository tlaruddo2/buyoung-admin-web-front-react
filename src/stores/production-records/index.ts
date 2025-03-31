import { create } from 'zustand'
import { ProductionRecord } from '@/types/production'

interface ProductionRecordsState {
  // UI State
  selectedRecord: ProductionRecord | undefined; // For update 
  selectedImage: string; // For delete
  selectedIds: number[];  // For checkbox selections
  selectedProductionLine: string; // For production line selections
  selectedDate: string; // For date selections (YYYY-MM-DD format)
  selectedInvoiceOpt: string; // For invoice opt selections
  filteredRecords: ProductionRecord[]; // For filtered records based on header selections
  
  // Actions
  setSelectedRecord: (record: ProductionRecord | undefined) => void;
  setSelectedDate: (date: string) => void;
  setSelectedProductionLine: (line: string) => void;
  setSelectedInvoiceOpt: (opt: string) => void;
  filterRecords: (records: ProductionRecord[]) => void;
  
  // Checkbox selection actions
  toggleSelection: (id: number) => void;
  clearSelections: () => void;
}

// Helper function to get local date in YYYY-MM-DD format
const getLocalDateString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const productionRecordsStore = create<ProductionRecordsState>((set) => ({
  // Initial State
  selectedRecord: undefined,
  selectedImage: '',
  selectedIds: [],
  filteredRecords: [],
  selectedProductionLine: '전체',
  selectedDate: getLocalDateString(),  // format: YYYY-MM-DD in local timezone
  selectedInvoiceOpt: '전체',
  
  // Actions
  setSelectedRecord: (record) => set({ selectedRecord: record }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedProductionLine: (line) => set({ selectedProductionLine: line }),
  setSelectedInvoiceOpt: (opt) => set({ selectedInvoiceOpt: opt }),
  filterRecords: (records) => {
    set((state) => {
      const filteredRecords = records.filter((record) => {
        // Convert record's created_at to local date string for comparison
        const recordDate = new Date(record.created_at);
        const recordDateString = `${recordDate.getFullYear()}-${String(recordDate.getMonth() + 1).padStart(2, '0')}-${String(recordDate.getDate()).padStart(2, '0')}`;
        
        const matchesDate = recordDateString === state.selectedDate;
        const matchesProductionLine = 
          state.selectedProductionLine === '전체' || 
          record.production_line === state.selectedProductionLine;

        const matchesInvoiceStatus = 
          state.selectedInvoiceOpt === '전체' || 
          (state.selectedInvoiceOpt === '발행' && record.invoice_issued) ||
          (state.selectedInvoiceOpt === '미발행' && !record.invoice_issued);

        return matchesDate && matchesProductionLine && matchesInvoiceStatus;
      });
      return { filteredRecords };
    });
  },
  // Checkbox selection actions
  toggleSelection: (id) => set((state) => ({
    selectedIds: state.selectedIds.includes(id)
      ? state.selectedIds.filter((selectedId) => selectedId !== id)
      : [...state.selectedIds, id]
  })),
  clearSelections: () => set({ selectedIds: [] })
}))
