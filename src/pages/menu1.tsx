import { useState } from "react";
import { Table } from "../component/table/table"

export interface Row {
    index: string[];
    data: boolean[];
}

export type Rows = Row[];

const rows: Rows = [
    {
        index: ["10", "비젤두입", "비젤 상태", "직접풍, 비젤풍 파손 확인겟", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["20", "침적탈지", "보충량", "1000CC/회", "비중계", "1회/주"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },    
    {
        index: ["", "", "온도", "40~60도", "조절기 확인", "시험전"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["", "", "염소계", "17~23g/L", "비중계", "1회/3개월"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["30", "산처리", "보충량", "20L/1회", "비중계", "시험전"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },

    {
        index: ["", "", "온도", "20~30도", "조절기 확인", "시험전"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["40", "수세 1", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["", "수세 2", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["50", "중화", "농도", "가성소다 10%", "비중계", "교환/일"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["", "약품투입", "온도", "약품온도 40~60도 증발수량은 약품보충양", "비중계", "1회/주(토)"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["60", "1차 아연 도금", "광택제", "SUPER B: 500CC/4HR", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["", "", "전압", "10±2V", "조절기 확인", "시험전"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["", "", "온도", "22~25도", "조절기 확인", "시험전"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["70", "비젤 수세", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["80", "질산 탈산성", "도금액 노황 방지", "블루지 4~5g/L 도금액 5~7cc/L", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["90", "수세 1", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
    {
        index: ["", "수세 2", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
        data: [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],        
    },
]

export const Menu1 = () => {
    const [ values, setValues ] = useState<Rows>(rows)

    const handleSaveBtnClick = () => {
        console.log(values);
    }

    return (
        <div >
            <div className="flex items-center">
                <div className="flex-1"> Title </div>
                <button className=" text-white rounded py-1 px-2 my-1 bg-sky-500/100" onClick={handleSaveBtnClick}>저장하기</button>                
            </div>

            <Table rows={rows} setValues={setValues}/>
        </div>
    )
}