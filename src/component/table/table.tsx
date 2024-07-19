import React from 'react';
import { CheckListRows } from '../../types/table';


interface Props{
    rows: CheckListRows;
    setValues: React.Dispatch<React.SetStateAction<CheckListRows>>
}
export const Table: React.FC<Props> = ( { rows, setValues } ) => {

    const handleCheckbox = (row: number, col: number) => {
        console.log("row " + row + "column: " +col)
        let copy = [...rows]
    copy[row].data[col] = !copy[row].data[col]
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
                    {
                        rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {
                                    row.index.map((indexData, i) => (
                                        <td key={i} className="border px-4 py-2">{indexData}</td>
                                    ))
                                }
                                {
                                    row.data.map((d, j) => (
                                        <td key={j} className="border px-4 py-2">
                                            <input type="checkbox" checked={d} onChange={() => handleCheckbox(rowIndex, j)}/>
                                        </td>
                                    ))                                    
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};
