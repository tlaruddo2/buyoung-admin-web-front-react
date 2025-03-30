import { create } from 'zustand'
import { ProductionRecord } from '@/types/production'

interface ProductionRecordsState {
  // UI State
  selectedRecord: ProductionRecord | undefined; // For update 
  selectedImage: string; // For delete
  selectedIds: number[];  // For checkbox selections
  
  // Actions
  setSelectedRecord: (record: ProductionRecord | undefined) => void;
  
  // Checkbox selection actions
  toggleSelection: (id: number) => void;
  clearSelections: () => void;
}

export const productionRecordsStore = create<ProductionRecordsState>((set) => ({
  // Initial State
  selectedRecord: undefined,
  selectedImage: '',
  selectedIds: [],
  
  // Actions
  setSelectedRecord: (record) => set({ selectedRecord: record }),
  
  // Checkbox selection actions
  toggleSelection: (id) => set((state) => ({
    selectedIds: state.selectedIds.includes(id)
      ? state.selectedIds.filter((selectedId) => selectedId !== id)
      : [...state.selectedIds, id]
  })),
  clearSelections: () => set({ selectedIds: [] })
}))
