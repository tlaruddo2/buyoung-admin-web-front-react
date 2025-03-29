import { useAllProductionRecords } from "../../../hooks";
import { TableRow } from "./table-row";

interface Props {
  setSelectedImage: (imageUrl: string) => void;
}

export const TableBody: React.FC<Props> = ({ setSelectedImage }) => {
  const { data, isLoading } = useAllProductionRecords();
  
  const handleImageDoubleClick = (imageUrl: string) => {
      setSelectedImage(imageUrl);
      const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
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

  return (
    <tbody>
      {data?.data.map((record) => (
        <TableRow 
          key={record.id}
          record={record}
          onImageClick={handleImageDoubleClick}
        />
      ))}            
    </tbody>        
  );
};
