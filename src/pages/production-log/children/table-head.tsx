import { useAllProductionRecords, useProductionRecordStore } from "@/hooks/production-records";

export const TableHead: React.FC = () => {
  const { selectedIds, clearSelections, toggleSelection } = useProductionRecordStore();
  const { data: records } = useAllProductionRecords(); //TODO: date 별로분류후 삭제 
  const isSelected = selectedIds.length > 0;

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSelected) {
      clearSelections();
    } else {
      records?.data?.forEach((record) => {
        toggleSelection(record.id);
      });
    }
  };

    const commonClasses = "border border-gray-300 bg-gray-100 text-blue-800 font-bold px-4 py-2 whitespace-pre-line text-center";

    return (
        <thead className="border-b-2 border-b-double">
            <tr>
                <th
                    rowSpan={2}
                    className="border border-gray-300 bg-gray-100 text-blue-800 font-bold"
                >
                    <input type="checkbox" className="checkbox checkbox-sm" onClick={handleCheckboxClick} />
                </th>
                <th
                    rowSpan={2}
                    className="border border-gray-300 bg-gray-100 text-blue-800 font-bold"
                >
                    순번
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    {'생산\n라인'}
                </th>                
                <th
                    colSpan={2}
                    className={commonClasses}
                >
                    생산시간
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    고객사
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    품명
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    사진
                </th>
                <th
                    colSpan={2}
                    className={commonClasses}
                >
                    도금조건
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    무게/수량
                </th>
                <th
                    colSpan={5}
                    className={commonClasses}
                >
                    도금두께
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    {'관리자\n확인'}
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    성적서
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    {'거래 명세서\n발행 여부'}
                </th>
                <th
                    rowSpan={2}
                    className={commonClasses}
                >
                    {'거래\n명세서'}
                </th>
            </tr>
            <tr>
                <th className={commonClasses}>
                    시작
                </th>
                <th className={commonClasses}>
                    완료
                </th>
                <th className={commonClasses}>
                    색상
                </th>
                <th className={commonClasses}>
                    도금두께
                </th>
                <th className={commonClasses}>
                    1
                </th>
                <th className={commonClasses}>
                    2
                </th>
                <th className={commonClasses}>
                    3
                </th>
                <th className={commonClasses}>
                    4
                </th>
                <th className={commonClasses}>
                    5
                </th>
            </tr>
        </thead>
    );
};
