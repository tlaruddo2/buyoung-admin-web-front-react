import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../api/config'

export interface ProductionRecord {
  id: number
  production_line: string
  start_time: string
  end_time: string
  customer: string
  product_name: string
  image_url: string
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

interface ApiResponse {
  status: string
  message: string
  data: ProductionRecord[]
}

interface SingleApiResponse {
  status: string
  message: string
  data: ProductionRecord
}

const queryKeys = {
  all: ['production-records'] as const,
  byId: (id: number) => [...queryKeys.all, id] as const,
  byDate: (startDate: Date, endDate: Date) => 
    [...queryKeys.all, 'date', { startDate, endDate }] as const,
}

export const useAllProductionRecords = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: async () => {
      const response = await api.get<ApiResponse>('/production-records')
      return response.data
    },
  })
}

export const useProductionRecordsByDate = (startDate: Date, endDate: Date) => {
  return useQuery({
    queryKey: queryKeys.byDate(startDate, endDate),
    queryFn: async () => {
      const params = new URLSearchParams({
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      })
      const response = await api.get<ApiResponse>(`/production-records?${params}`)
      return response.data
    },
  })
}

export const useProductionRecordById = (id: number | undefined) => {
  return useQuery({
    queryKey: queryKeys.byId(id as number),
    queryFn: async () => {
      const response = await api.get<SingleApiResponse>(`/production-records/${id}`)
      return response.data
    },
    enabled: !!id
  })
}

export const useUpdateProductionRecordById = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (record: Partial<ProductionRecord> & { id: number }) => {
      const response = await api.put<SingleApiResponse>(
        `/production-records/${record.id}`,
        record
      )
      return response.data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
      queryClient.invalidateQueries({ queryKey: queryKeys.byId(variables.id) })
    },
  })
}

export const useDeleteProductionRecordById = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete<SingleApiResponse>(`/production-records/${id}`)
      return response.data
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
      queryClient.invalidateQueries({ queryKey: queryKeys.byId(id) })
    },
  })
}

export const useDeleteProductionRecordsById = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (ids: number[]) => {
      const response = await api.delete<ApiResponse>('/production-records/batch', {
        data: { ids }
      })
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
}

export const useCreateProductionRecord = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newRecord: Omit<ProductionRecord, 'id' | 'created_at' | 'updated_at'>) => {
      const response = await api.post<SingleApiResponse>('/production-records', newRecord)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
} 


// How to use the hooks
// const { data, isLoading, error } = useProductionRecords()
// const { data: recordsByDate, isLoading: isLoadingByDate, error: errorByDate } = useProductionRecordsByDate(startDate, endDate)
// const { data: recordById, isLoading: isLoadingById, error: errorById } = useProductionRecord(id)
// const { mutate: updateRecord } = useUpdateProductionRecord()
// const { mutate: deleteRecord } = useDeleteProductionRecord()

// // Get all records
// const { data, isLoading, error } = useProductionRecords()

// // Get records by date
// const { data: dateFilteredRecords, isLoading: isLoadingByDate } = useProductionRecordsByDate(
//   new Date('2024-03-01'),
//   new Date('2024-03-31')
// )

// // Get single record
// const { data: record, isLoading: isLoadingById } = useProductionRecord(1)

// // Update record
// const { mutate: updateRecord, isLoading: isUpdating } = useUpdateProductionRecord()
// updateRecord({ 
//   id: 1, 
//   quantity: 150,
//   manager_confirmation: true 
// })

// // Delete record
// const { mutate: deleteRecord, isLoading: isDeleting } = useDeleteProductionRecord()
// deleteRecord(1)

// // Delete multiple records
// const { mutate: deleteRecords, isLoading: isDeletingMultiple } = useDeleteProductionRecords()
// deleteRecords([1, 2, 3])

// // Create record
// const { mutate: createRecord, isLoading: isCreating } = useCreateProductionRecord()
// createRecord({
//   production_line: '1호라인',
//   start_time: '08:00:00',
//   end_time: '12:00:00',
//   customer: '삼성전자',
//   product_name: '반도체 부품 SK-2024',
//   image_url: 'https://example.com/image.jpg',
//   color: '금도금',
//   plating_thickness_condition: '표준 사양',
//   quantity: 100,
//   plating_thickness_1: '2.45',
//   plating_thickness_2: '2.50',
//   plating_thickness_3: '2.48',
//   plating_thickness_4: '2.46',
//   plating_thickness_5: '2.47',
//   manager_confirmation: true,
//   test_certificate: null,
//   invoice_issued: false
// })

// // Example with error handling
// const { data, isLoading, error } = useProductionRecords()

// if (isLoading) return <div>Loading...</div>
// if (error) return <div>Error: {error.message}</div>

// const { mutate: updateRecord, error: updateError } = useUpdateProductionRecord()

// const handleUpdate = (id: number, data: Partial<ProductionRecord>) => {
//   updateRecord({ id, ...data }, {
//     onError: (error) => {
//       console.error('Update failed:', error)
//     }
//   })
// }