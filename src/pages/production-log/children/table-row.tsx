import { ProductionRecord } from "../../../hooks";

interface Props {
  record: ProductionRecord;
  onImageClick: (imageUrl: string) => void;
}

export const TableRow: React.FC<Props> = ({ record, onImageClick }) => {
  return (
    <tr key={record.id} className="hover:bg-gray-100">
      <td className="border border-gray-300">
        <input type="checkbox" />
      </td>
      <td className="border border-gray-300">
        <button>{record.id}</button>
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {record.production_line}
      </td>
      <td className="border border-gray-300 px-4 py-2">{record.start_time}</td>
      <td className="border border-gray-300 px-4 py-2">{record.end_time}</td>
      <td className="border border-gray-300 px-4 py-2">{record.customer}</td>
      <td className="border border-gray-300 px-4 py-2">{record.product_name}</td>
      <td className="border border-gray-300 px-4 py-2">
        {record.image_url ? (
          <img 
            src={record.image_url} 
            alt="product" 
            className="w-6 h-6 mx-auto cursor-pointer" 
            onClick={() => onImageClick(record.image_url)}
          />
        ) : (
          <div className="w-6 h-6 mx-auto flex items-center justify-center text-gray-600">
            ✘
          </div>
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">{record.color}</td>
      <td className="border border-gray-300 px-4 py-2">{record.plating_thickness_condition}</td>
      <td className="border border-gray-300 px-4 py-2">{record.quantity}</td>
      <td className="border border-gray-300 px-4 py-2">{record.plating_thickness_1}</td>
      <td className="border border-gray-300 px-4 py-2">{record.plating_thickness_2}</td>
      <td className="border border-gray-300 px-4 py-2">{record.plating_thickness_3}</td>
      <td className="border border-gray-300 px-4 py-2">{record.plating_thickness_4}</td>
      <td className="border border-gray-300 px-4 py-2">{record.plating_thickness_5}</td>
      <td className="border border-gray-300 px-4 py-2">
        {record.manager_confirmation ? "OK" : "NO"}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {record.test_certificate ? (
          <button className="btn btn-xs">열기</button>
        ) : (
          "✘"
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        {record.invoice_issued ? "○" : "X"}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <button className="btn btn-primary btn-xs">발행</button>
      </td>
    </tr>
  );
}; 