import { TableBody } from "./table-body"
import { TableHead } from "./table-head"

//TODO: 1. If press order number, show edit dialog ( only admin possible )
//TODO: 2. add 생산라인 바렐 /  렉 
//TODO: 3.. add button in each row to print invoice
export const Table: React.FC = () => {
    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table table-xs text-center border-4 border-solid">
                    <TableHead/>
                    <TableBody/>
                </table>
            </div>
        </div>
    )
}
