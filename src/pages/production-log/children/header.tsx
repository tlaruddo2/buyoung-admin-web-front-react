import { SetStateAction, useState } from "react";

export const Header: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];
    const [ selectedDate, setSelectedDate ] = useState(today);
    const [ selectedInvoiceOpt, setSelectedInvoiceOpt ] = useState("all");
    const [ selectedProductionLineOpt, setSelectedProductionLineOpt ] = useState("all");

    const handleDateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(event.target.value);
        console.log("[Debug: production-log/children/header.tsx] selectedDate: ", selectedDate);
    };

    const handleInvoiceOptTabClick = (opt: string) => {
        setSelectedInvoiceOpt(opt);
        console.log("[Debug: production-log/children/header.tsx] selectedInvoiceOpt: ", selectedInvoiceOpt);
    };

    const handleProductionLineOptTabClick = (opt: string) => {
        setSelectedProductionLineOpt(opt);
        console.log("[Debug: production-log/children/header.tsx] selectedProductionLineOpt: ", selectedProductionLineOpt);
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
                        className={`tab h-full flex items-center ${selectedProductionLineOpt === 'all' ? 'tab-active font-bold' : ''}`}
                        onClick={() => handleProductionLineOptTabClick('all')}
                    >
                        전체
                    </div>
                    <div 
                        role="tab" 
                        className={`tab h-full flex items-center ${selectedProductionLineOpt === 'barell' ? 'tab-active font-bold' : ''}`}
                        onClick={() => handleProductionLineOptTabClick('barell')}
                    >
                        바렐
                    </div>
                    <div 
                        role="tab" 
                        className={`tab h-full flex items-center ${selectedProductionLineOpt === 'rack' ? 'tab-active font-bold' : ''}`}
                        onClick={() => handleProductionLineOptTabClick('rack')}
                    >
                        렉
                    </div>
                </div>           
            </div>
            <div role="tablist" className="tabs tabs-boxed tabs-sm h-8 flex items-center">
                <div 
                    role="tab" 
                    className={`tab h-full flex items-center ${selectedInvoiceOpt === 'all' ? 'tab-active font-bold' : ''}`}
                    onClick={() => handleInvoiceOptTabClick('all')}
                >
                    전체
                </div>
                <div 
                    role="tab" 
                    className={`tab h-full flex items-center ${selectedInvoiceOpt === 'unpublished' ? 'tab-active font-bold' : ''}`}
                    onClick={() => handleInvoiceOptTabClick('unpublished')}
                >
                    미발행
                </div>
                <div 
                    role="tab" 
                    className={`tab h-full flex items-center ${selectedInvoiceOpt === 'published' ? 'tab-active font-bold' : ''}`}
                    onClick={() => handleInvoiceOptTabClick('published')}
                >
                    발행
                </div>
            </div>           
        </div>
    )
}
