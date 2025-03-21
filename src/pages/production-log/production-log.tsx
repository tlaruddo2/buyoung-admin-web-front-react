import { Footer, Header, Table} from  "./children";
import { AddDataModal } from "./children/add-data-modal";

export const ProductionLog: React.FC = () => {
    console.log("ProductionLog component rendering");
    return (
        <div>
            <Header/> 
            <Table/>
            <Footer/>
            {/* <AddDataModal/> */}
        </div>
    )
}
