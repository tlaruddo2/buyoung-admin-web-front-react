import { useState } from "react";

export const TableBody: React.FC = () => {
    const [ selectedImage, setSelectedImage ] = useState("")

    const handleImageDoubleClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
        modal?.showModal();      
    };

    const rows = [
        {
          order: 1,
          startTime: "05:11",
          endTime: "08:22",
          customer: "신흥기공",
          product: "FEMALE",
          photo: "https://via.placeholder.com/24", // Replace with actual image URL
          color: "백색",
          platingThickness: "8이상",
          weightQuantity: 200,
          thicknesses: [9.43, 9.65, 9.21, 9.43, 9.25],
          managerConfirm: "OK",
          certification: "✔",
          invoiceIssued: "○",
        },
        {
          order: 2,
          startTime: "08:22",
          endTime: "10:11",
          customer: "신흥기공",
          product: "MALE",
          photo: "data:image/jpeg;base64,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", // Replace with actual image URL
          color: "백색",
          platingThickness: "8이상",
          weightQuantity: 200,
          thicknesses: [9.43, 9.65, 9.21, 9.43, 9.25],
          managerConfirm: "NO",
          certification: "✘",
          invoiceIssued: "X",
        },
      ];

    return (
        <tbody>
            {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300">
                  <button>{row.order}</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  바렐
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.startTime}</td>
                <td className="border border-gray-300 px-4 py-2">{row.endTime}</td>
                <td className="border border-gray-300 px-4 py-2">{row.customer}</td>
                <td className="border border-gray-300 px-4 py-2">{row.product}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img 
                    src={row.photo} 
                    alt="product" 
                    className="w-6 h-6 mx-auto cursor-pointer" 
                    onClick={() => handleImageDoubleClick(row.photo)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.color}</td>
                <td className="border border-gray-300 px-4 py-2">{row.platingThickness}</td>
                <td className="border border-gray-300 px-4 py-2">{row.weightQuantity}</td>
                {row.thicknesses.map((thickness, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2">
                    {thickness}
                </td>
                ))}
                <td className="border border-gray-300 px-4 py-2">{row.managerConfirm}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="btn btn-xs">열기</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.invoiceIssued}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="btn btn-primary btn-xs">발행</button>
                </td>
            </tr>
            ))}
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                  <form method="dialog" className="modal-backdrop">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                  </form>
                  <img 
                      src={selectedImage} 
                      alt="product" 
                      className="w-40 h-40 mx-auto" 
                    />                  
              </div>
            </dialog>                
        </tbody>        
    )
}
