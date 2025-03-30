import { Footer, Header, Table } from "./children";
import { AddDataModal } from "./children/add-data-modal";
import { useProductionRecordStore } from "@/hooks/production-records/useProductionRecordStore";

export const ProductionLog: React.FC = () => {

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
