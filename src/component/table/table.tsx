import React from 'react';

type RowData = (string | string[])[];

const columns = [
    ["10", "비젤두입", "비젤 상태", "직접풍, 비젤풍 파손 확인겟", "육안", "매작업시"],
    ["20", "침적탈지", "보충량", "1000CC/회", "비중계", "1회/주"],
    ["", "", "온도", "40~60도", "조절기 확인", "시험전"],
    ["", "", "염소계", "17~23g/L", "비중계", "1회/3개월"],
    ["30", "산처리", "보충량", "20L/1회", "비중계", "시험전"],
    ["", "", "온도", "20~30도", "조절기 확인", "시험전"],
    ["40", "수세 1", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
    ["", "수세 2", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
    ["50", "중화", "농도", "가성소다 10%", "비중계", "교환/일"],
    ["", "약품투입", "온도", "약품온도 40~60도 증발수량은 약품보충양", "비중계", "1회/주(토)"],
    ["60", "1차 아연 도금", "광택제", "SUPER B: 500CC/4HR", "육안", "매작업시"],
    ["", "", "전압", "10±2V", "조절기 확인", "시험전"],
    ["", "", "온도", "22~25도", "조절기 확인", "시험전"],
    ["70", "비젤 수세", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
    ["80", "질산 탈산성", "도금액 노황 방지", "블루지 4~5g/L 도금액 5~7cc/L", "육안", "매작업시"],
    ["90", "수세 1", "오염확인", "OVER FLOW 될것", "육안", "매작업시"],
    ["", "수세 2", "오염확인", "OVER FLOW 될것", "육안", "매작업시"]
];

interface Props{
    tableValues: boolean[][] 
    setValues: React.Dispatch<React.SetStateAction<boolean[][]>>
}
export const Table: React.FC<Props> = ( { tableValues, setValues } ) => {
    const handleCheckbox = (row: number, col: number) => {
        console.log("row " + row + "column: " +col)
        let copy = [...tableValues]
        copy[row][col] = !copy[row][col];
        console.log("handle");
        setValues(copy)
    }
    return (
        <div className="overflow-x-auto">
            <table className="text-xs min-w-full bg-white border border-gray-300">
                <thead className=" bg-slate-300">
                    <tr>
                        <th className='py-2'>NO</th>
                        <th>공정명</th>
                        <th>점검항목</th>
                        <th>규격</th>
                        <th>방법</th>
                        <th>주기</th>
                        {Array.from({ length: 31 }, (_, i) => (
                            <th key={i} className='px-1'>{i + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {columns.map((column, rowIndex) => (
                        <tr key={rowIndex}>
                            {column.map((cell, colIndex) => (
                                <td key={colIndex} className="border px-4 py-2">
                                    {cell}
                                </td>
                            ))}
                            {tableValues[rowIndex].map((value, index) => (
                                <td key={index + column.length} className="border px-4 py-2">
                                    <input type="checkbox" checked={value} onChange={() => handleCheckbox(rowIndex, index)}/>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
