import { useState } from "react"
import { TableBody } from "./table-body"
import { TableHead } from "./table-head"
import { ImageModal } from "./image-modal"

//TODO: 1. If press order number, show edit dialog ( only admin possible )
//TODO: 2. add 생산라인 바렐 /  렉 
//TODO: 3.. add button in each row to print invoice
export const Table: React.FC = () => {
  const [ selectedImage, setSelectedImage ] = useState("")
  
  return (
    <div>
        <div className="overflow-x-auto">
          <table className="table table-xs text-center border-4 border-solid">
            <TableHead/>
            <TableBody setSelectedImage={setSelectedImage}/>
          </table>    
        </div>
        <ImageModal selectedImage={selectedImage}/>
    </div>
  )
}
