import { useState } from "react";
import { Table } from "../component/table/table"


let tableValue : boolean[][] = [
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
    [false, false, false, false, false, false, false, false, false, false, false , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,],
];

export const Menu1 = () => {
    const [ values, setValues ] = useState<boolean[][]>(tableValue)

    const handleSaveBtnClick = () => {
        console.log(values);
    }

    return (
        <div >
            <div className="flex items-center">
                <div className="flex-1"> Title </div>
                <button className=" text-white rounded py-1 px-2 my-1 bg-sky-500/100" onClick={handleSaveBtnClick}>저장하기</button>                
            </div>

            <Table tableValues={tableValue} setValues={setValues}/>
        </div>
    )
}