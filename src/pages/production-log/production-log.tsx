import { Footer, Header, Table } from "./children";
import { AddDataModal } from "./children/add-data-modal";
import { useProductionRecordStore } from "@/hooks/production-records/useProductionRecordStore";
import { useAllProductionRecords } from "@/hooks/production-records";
import { useEffect } from "react";

export const ProductionLog: React.FC = () => {
  const { data: records } = useAllProductionRecords();
  const { filterRecords } = useProductionRecordStore();

  // Run filter when component mounts and records are available
  useEffect(() => {
    if (records?.data) {
      filterRecords(records.data);
    }
  }, [records?.data]);

  return (
    <div>
      <Header />
      <Table />
      <Footer />
      <AddDataModal />
      {/* <BulkActions /> */}
    </div>  
  );
};
