import { ProductionRecord } from "@/types";
import { useAllProductionRecords } from "@/hooks/production-records/useProductionRecord";
import { TableRow } from "./table-row";
import { useEffect, useState } from "react";
import { ImageModal } from "./image-modal";
import { useProductionRecordStore } from "@/hooks/production-records/useProductionRecordStore";

interface Props {
  setSelectedImage: (imageUrl: string) => void;
}
export const TableBody: React.FC<Props> = ({ 
  setSelectedImage
}) => {

  const { filteredRecords } = useProductionRecordStore(); 
  
  const handleImageDoubleClick = (imageUrl: string) => {
      setSelectedImage(imageUrl);
      const modal = document.getElementById('image-modal') as HTMLDialogElement;
      modal?.showModal();      
  };

  if (filteredRecords.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={17} className="text-center py-4">
            해당 생산일지가 없습니다.
          </td>
        </tr>
      </tbody>
    );
  } 

  return (
    <>
      <tbody>
        {filteredRecords.map((record: ProductionRecord) => (
          <TableRow 
            key={record.id}
            record={record}
            onImageClick={handleImageDoubleClick}
          />
        ))}            
      </tbody>        
    </>
  );
};
