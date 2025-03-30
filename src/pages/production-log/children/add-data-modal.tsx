import { useEffect, useState } from 'react';
import { useCreateProductionRecord, useUpdateProductionRecordById } from '../../../hooks/production-records/useProductionRecord';
import { ProductionRecord } from '../../../types/production';
import { useProductionRecordStore } from '@/hooks/production-records';
import toast from 'react-hot-toast';

export const AddDataModal: React.FC = () => {
  const { selectedRecord } = useProductionRecordStore();

  const [formData, setFormData] = useState<Partial<ProductionRecord>>({
    production_line: selectedRecord?.production_line || '',
    start_time: selectedRecord?.start_time || '',
    end_time: selectedRecord?.end_time || '',
    customer: selectedRecord?.customer || '',
    product_name: selectedRecord?.product_name || '',
    image_url: selectedRecord?.image_url || undefined,
    color: selectedRecord?.color || '',
    plating_thickness_condition: selectedRecord?.plating_thickness_condition || '',
    quantity: selectedRecord?.quantity || 0,
    plating_thickness_1: selectedRecord?.plating_thickness_1 || '',
    plating_thickness_2: selectedRecord?.plating_thickness_2 || '',
    plating_thickness_3: selectedRecord?.plating_thickness_3 || '',
    plating_thickness_4: selectedRecord?.plating_thickness_4 || '',
    plating_thickness_5: selectedRecord?.plating_thickness_5 || '',
    manager_confirmation: selectedRecord?.manager_confirmation || false,
    test_certificate: selectedRecord?.test_certificate || undefined,
    invoice_issued: selectedRecord?.invoice_issued || false,
  });

  useEffect(() => {
    setFormData({
      production_line: selectedRecord?.production_line || '',
      start_time: selectedRecord?.start_time || '',
      end_time: selectedRecord?.end_time || '',
      customer: selectedRecord?.customer || '',
      product_name: selectedRecord?.product_name || '',
      image_url: selectedRecord?.image_url || undefined,
      color: selectedRecord?.color || '',
      plating_thickness_condition: selectedRecord?.plating_thickness_condition || '',
      quantity: selectedRecord?.quantity || 0,
      plating_thickness_1: selectedRecord?.plating_thickness_1 || '',
      plating_thickness_2: selectedRecord?.plating_thickness_2 || '',
      plating_thickness_3: selectedRecord?.plating_thickness_3 || '',
      plating_thickness_4: selectedRecord?.plating_thickness_4 || '',
      plating_thickness_5: selectedRecord?.plating_thickness_5 || '',
      manager_confirmation: selectedRecord?.manager_confirmation || false,
      test_certificate: selectedRecord?.test_certificate || undefined,
      invoice_issued: selectedRecord?.invoice_issued || false,
    });
  }, [selectedRecord]);

  const { mutate: createRecord, isPending } = useCreateProductionRecord();
  const { mutate: updateRecord, isPending: isUpdating } = useUpdateProductionRecordById();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedRecord) {
      updateRecord({id: selectedRecord.id, ...formData}, 
      {
        onSuccess: () => 
        {
          const modal = document.getElementById('add-data-modal') as HTMLDialogElement;
          modal?.close();
        },
        onError: (error) => {
          console.error(error);
          toast.error('생산일지 수정 실패. 다시 시도해주세요.');
        }
    });
    return;
  }

  createRecord(formData as Omit<ProductionRecord, 'id' | 'created_at' | 'updated_at'>, {
    onSuccess: () => {
        const modal = document.getElementById('add-data-modal') as HTMLDialogElement;
        modal?.close();
    }
  });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
      }));
  };

  return (
      <div>
          <dialog id="add-data-modal" className="modal">
              <div className="modal-box">
                  <h3 className="font-bold text-lg">생산일지 추가 및 수정</h3>
                  <form onSubmit={handleSubmit} className="py-4">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">생산라인</span>
                          </label>
                          <input 
                              type="text" 
                              name="production_line"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.production_line}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">시작 시간</span>
                          </label>
                          <input 
                              type="time" 
                              name="start_time"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.start_time}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">종료 시간</span>
                          </label>
                          <input 
                              type="time" 
                              name="end_time"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.end_time}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">고객사</span>
                          </label>
                          <input 
                              type="text" 
                              name="customer"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.customer}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">제품명</span>
                          </label>
                          <input 
                              type="text" 
                              name="product_name"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.product_name}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">사진</span>
                          </label>
                          <input 
                              type="file" 
                              accept="image/*" 
                              className="file-input file-input-bordered w-full h-8 min-h-0"
                              onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                      // Handle file upload here
                                      // You might want to upload to a storage service first
                                      // and then set the URL in formData
                                  }
                              }}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">색상</span>
                          </label>
                          <input 
                              type="text" 
                              name="color"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.color}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">도금 두께 조건</span>
                          </label>
                          <input 
                              type="text" 
                              name="plating_thickness_condition"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.plating_thickness_condition}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">수량</span>
                          </label>
                          <input 
                              type="number" 
                              name="quantity"
                              className="input input-bordered h-8 min-h-0" 
                              value={formData.quantity}
                              onChange={handleInputChange}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">두께 측정값</span>
                          </label>
                          <div className="grid grid-cols-5 gap-2">
                              {[1, 2, 3, 4, 5].map((num) => (
                                  <input 
                                      key={num}
                                      type="number" 
                                      step="0.01"
                                      name={`plating_thickness_${num}`}
                                      className="input input-bordered h-8 min-h-0" 
                                      value={formData[`plating_thickness_${num}` as keyof ProductionRecord]?.toString() || ''}
                                      onChange={handleInputChange}
                                  />
                              ))}
                          </div>
                      </div>

                      <div className="form-control">
                          <label className="label cursor-pointer">
                              <span className="label-text">관리자 확인</span>
                              <input 
                                  type="checkbox" 
                                  name="manager_confirmation"
                                  className="checkbox checkbox-sm" 
                                  checked={formData.manager_confirmation}
                                  onChange={handleInputChange}
                              />
                          </label>
                      </div>

                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">시험성적서</span>
                          </label>
                          <input 
                              type="file" 
                              accept=".pdf,.doc,.docx"
                              className="file-input file-input-bordered w-full h-8 min-h-0"
                              onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                      // Handle file upload here
                                  }
                              }}
                          />
                      </div>

                      <div className="form-control">
                          <label className="label cursor-pointer">
                              <span className="label-text">거래명세서 발행</span>
                              <input 
                                  type="checkbox" 
                                  name="invoice_issued"
                                  className="checkbox checkbox-sm" 
                                  checked={formData.invoice_issued}
                                  onChange={handleInputChange}
                              />
                          </label>
                      </div>

                      <div className="modal-action">
                          <button 
                              type="submit" 
                              className="btn btn-primary"
                              disabled={isPending}
                          >
                              {isPending ? '저장 중...' : '저장하기'}
                          </button>
                          <button 
                              type="button" 
                              className="btn" 
                              onClick={() => {
                                  const modal = document.getElementById('add-data-modal') as HTMLDialogElement;
                                  modal?.close();
                              }}
                          >
                              취소
                          </button>
                      </div>
                  </form>
              </div>
          </dialog>     
      </div>
  );
};