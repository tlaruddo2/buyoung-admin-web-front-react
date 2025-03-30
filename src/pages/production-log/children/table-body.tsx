import { ProductionRecord } from "@/types";
import { useAllProductionRecords } from "@/hooks/production-records/useProductionRecord";
import { TableRow } from "./table-row";
import { useState } from "react";
import { ImageModal } from "./image-modal";

interface Props {
  setSelectedImage: (imageUrl: string) => void;
}
export const TableBody: React.FC<Props> = ({ 
  setSelectedImage
}) => {
  
  const { data, isLoading, error } = useAllProductionRecords();
  
  const handleImageDoubleClick = (imageUrl: string) => {
      setSelectedImage(imageUrl);
      const modal = document.getElementById('image-modal') as HTMLDialogElement;
      modal?.showModal();      
  };

  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan={17} className="text-center py-4">Loading...</td>
        </tr>
      </tbody>
    );
  }

  if (error) {
    return (
      <tbody>
        <tr>
          <td colSpan={17} className="text-center py-4 text-red-500">
            Error: {error.message}
          </td>
        </tr>
      </tbody>
    );
  }

  if (!data?.data || data.data.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={17} className="text-center py-4">
            No records found
          </td>
        </tr>
      </tbody>
    );
  } 

  return (
    <>
      <tbody>
        {data.data.map((record: ProductionRecord) => (
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
