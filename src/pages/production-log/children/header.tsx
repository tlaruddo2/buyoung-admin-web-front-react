import { SetStateAction, useState } from "react";

export const Header: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedOption, setSelectedOption] = useState("all");

    const handleDateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedDate(event.target.value);
    };

    const handleTabClick = (option: string) => {
        console.log(option)
        setSelectedOption(option);
    };

    return (
        <div className="w-full flex justify-between items-center h-15">
            <div role="tablist" className="tabs tabs-boxed tabs-sm h-8">
                <div 
                    role="tab" 
                    className={`tab h-full ${selectedOption === 'all' ? 'tab-active font-bold' : ''}`}
                    onClick={() => handleTabClick('all')}
                >
                    전체
                </div>
                <div 
                    role="tab" 
                    className={`tab h-full ${selectedOption === 'unpublished' ? 'tab-active font-bold' : ''}`}
                    onClick={() => handleTabClick('unpublished')}
                >
                    미발행
                </div>
                <div 
                    role="tab" 
                    className={`tab h-full ${selectedOption === 'published' ? 'tab-active font-bold' : ''}`}
                    onClick={() => handleTabClick('published')}
                >
                    발행
                </div>
            </div>           
            <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="input input-bordered input-primary w-full max-w-xs m-2 h-8 min-h-0"
            /> 
        </div>
    )
}
