export type ProductionRecord = {
  id: number
  production_line: string
  start_time: string
  end_time: string
  customer: string
  product_name: string
  image_url: string | null
  color: string
  plating_thickness_condition: string
  quantity: number
  plating_thickness_1: string
  plating_thickness_2: string
  plating_thickness_3: string
  plating_thickness_4: string
  plating_thickness_5: string
  manager_confirmation: boolean
  test_certificate: string | null
  invoice_issued: boolean
  created_at: Date
  updated_at: Date
}

export type ProductionRecordStoreState = {
  selectedRecord: ProductionRecord | undefined 
  selectedRecords: ProductionRecord[] 
  setSelectedRecord: (record: ProductionRecord) => void 
  setSelectedRecords: (records: ProductionRecord[]) => void 
} 