import { useProductionRecordStore } from "@/hooks/production-records/useProductionRecordStore";
import { useAllProductionRecords } from "@/hooks/production-records";

export const Header: React.FC = () => {
  const { data: records } = useAllProductionRecords();
  const { 
    selectedDate, 
    selectedProductionLine, 
    selectedInvoiceOpt,
    setSelectedDate,
    setSelectedProductionLine,
    setSelectedInvoiceOpt,
    filterRecords
  } = useProductionRecordStore();

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    if (records?.data) {
      filterRecords(records.data);
    }
  };

  const handleProductionLineOptTabClick = (opt: string) => {
    setSelectedProductionLine(opt);
    if (records?.data) {
      filterRecords(records.data);
    }
  };

  const handleInvoiceOptTabClick = (opt: string) => {
    setSelectedInvoiceOpt(opt);
    if (records?.data) {
      filterRecords(records.data);
    }
  }

  return (
    <div className="w-full flex justify-between items-center h-15 p-2">
      <div className="join flex items-center gap-2">
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="input input-bordered input-primary max-w-xs h-8 min-h-0"
        />   
        <div role="tablist" className="tabs tabs-boxed tabs-sm h-8 flex items-center">
          <div 
            role="tab" 
            className={`tab h-full flex items-center ${selectedProductionLine === '전체' ? 'tab-active font-bold' : ''}`}
            onClick={() => handleProductionLineOptTabClick('전체')}
          >
            전체
          </div>
          <div 
            role="tab" 
            className={`tab h-full flex items-center ${selectedProductionLine === '바렐' ? 'tab-active font-bold' : ''}`}
            onClick={() => handleProductionLineOptTabClick('바렐')}
          >
            바렐
          </div>
          <div 
            role="tab" 
            className={`tab h-full flex items-center ${selectedProductionLine === '렉' ? 'tab-active font-bold' : ''}`}
            onClick={() => handleProductionLineOptTabClick('렉')}
          >
            렉
          </div>
        </div>           
      </div>
      <div role="tablist" className="tabs tabs-boxed tabs-sm h-8 flex items-center">
        <div 
          role="tab" 
          className={`tab h-full flex items-center ${selectedInvoiceOpt === '전체' ? 'tab-active font-bold' : ''}`}
          onClick={() => handleInvoiceOptTabClick('전체')}
        >
          전체
        </div>
        <div 
          role="tab" 
          className={`tab h-full flex items-center ${selectedInvoiceOpt === '미발행' ? 'tab-active font-bold' : ''}`}
          onClick={() => handleInvoiceOptTabClick('미발행')}
        >
          미발행
        </div>
        <div 
          role="tab" 
          className={`tab h-full flex items-center ${selectedInvoiceOpt === '발행' ? 'tab-active font-bold' : ''}`}
          onClick={() => handleInvoiceOptTabClick('발행')}
        >
          발행
        </div>
      </div>           
    </div>
  )
}
