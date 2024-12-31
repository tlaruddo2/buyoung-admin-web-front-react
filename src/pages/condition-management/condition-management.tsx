import { useEffect, useState } from "react";
import { Table } from "../../component/table/table"
import { CheckListRows } from "../../types/table";
import { extractExcel, SheetInfo } from "../../helper/extract-excel";
import axios from "axios";
import { Header } from "./children/header";

let rows: CheckListRows = [
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
//race condition 
//abort controller 

export const ConditionManagement = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [values, setValues] = useState<CheckListRows>(rows)
    const [month, setMonth] = useState<string>("7");
    const [year, setYear] = useState<string>("2024");

    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/checklist/monthly-condition/${year}/${month}`)
                const data = response.data;
                const checkedArr = data[0].checked; 
                const newCheckedArr = rows.map((row, i) => ({
                    index: values[i].index,
                    data: checkedArr[i] || values[i].data,
                })) 

                setValues(newCheckedArr);
            }catch(e: any){
                setError(error);
            }finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    interface Data {
        year: string;
        month: string;
        checked: boolean[][];
    }
    const sendData = async (data: Data) => {
        try{
            const response = await axios.put("https://buyoung-admin-web-back-node.onrender.com/checklist/monthly-condition", data)    
            alert("saved");
        }catch(e: any){
            setError(e)
        }finally{
            window.location.reload();
        }
    }


    const handleSaveBtnClick = (year: string, month: string) => {
        const checked = [] 

        for ( var i = 0; i < values.length; i ++){
            checked.push(values[i].data)
        }
        const data = {
            year: year,
            month: month,
            checked: checked,
        }

        sendData(data);
    }

    const sheetInfo: SheetInfo =  {
        fileName: 'text',
        sheetName: 'test shee',
        columnNames: [
            {header: "No", key: 'no', width: 10},
            {header: "공정명", key: '공정명', width: 10},
            {header: "점검항목", key: '점검항목', width: 10},
            {header: "규격", key: '규격', width: 10},
            {header: "방법", key: '방법', width: 10},
            {header: "주기", key: '주기', width: 10},
            {header: "1", key: '1', width: 10},
            {header: "2", key: '2', width: 10},
            {header: "3", key: '3', width: 10},
            {header: "4", key: '4', width: 10},
            {header: "5", key: '5', width: 10},
            {header: "6", key: '6', width: 10},
            {header: "7", key: '7', width: 10},
            {header: "8", key: '8', width: 10},
            {header: "9", key: '9', width: 10},
            {header: "10", key: '10', width: 10},
            {header: "11", key: '11', width: 10},
            {header: "12", key: '12', width: 10},
            {header: "13", key: '13', width: 10},
            {header: "14", key: '14', width: 10},
            {header: "15", key: '15', width: 10},
            {header: "16", key: '16', width: 10},
            {header: "17", key: '17', width: 10},
            {header: "18", key: '18', width: 10},
            {header: "19", key: '19', width: 10},
            {header: "20", key: '20', width: 10},
            {header: "21", key: '21', width: 10},
            {header: "22", key: '22', width: 10},
            {header: "23", key: '23', width: 10},
            {header: "24", key: '24', width: 10},
            {header: "25", key: '25', width: 10},
            {header: "26", key: '26', width: 10},
            {header: "27", key: '27', width: 10},
            {header: "28", key: '28', width: 10},
            {header: "29", key: '29', width: 10},
            {header: "30", key: '30', width: 10},
            {header: "31", key: '31', width: 10},
        ] 
    }


    if (error) return <div>error, try again</div>

    return (
        <div >
            <div className="flex items-center p-2">
                <div className="flex-1"> 24년 7월 조건관리 체크리스트 </div>
                <button className=" text-white rounded py-1 px-2 my-1 bg-sky-500/100 mr-2" onClick={() => handleSaveBtnClick(year, month)}>저장하기</button>                
                <button className=" text-white rounded py-1 px-2 my-1 bg-sky-500/100" onClick={() => extractExcel(sheetInfo, rows)}>추출하기</button>                
            </div>
            <Header year={"2024"} month="6"/>
            {isLoading ?
                <div>loading... </div>
                :<Table rows={values} setValues={setValues}/>}
        </div>
    )
}