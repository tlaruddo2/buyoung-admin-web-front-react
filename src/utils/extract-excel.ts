import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';

interface ColumnName {
    header: string,
    key: string,
    width: number
}
export interface SheetInfo {
    fileName: string,
    sheetName: string, 
    columnNames: ColumnName[]
}
interface Row {
    index: string[],
    data: boolean[]; 
}

export async function extractExcel( sheetInfo: SheetInfo, rows: Row[]) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetInfo.sheetName);

    let tmp = []
    for ( let columnName of sheetInfo.columnNames ){
        let c = { header: columnName.header, key: columnName.key, width: columnName.width }
        tmp.push(c)
    }
    worksheet.columns = tmp

    for (let row of rows) {
        let tmp: { [key: string]: any } = {};

        for ( var i = 0; i < row.index.length; i++ ){
            tmp[sheetInfo.columnNames[i].key] = row.index[i]
        }

        for ( var j = 0; j < row.data.length; j++) {
            tmp[sheetInfo.columnNames[j+row.index.length].key] = row.data[j]
        }

        worksheet.addRow(tmp);
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, sheetInfo.fileName);
    console.log('Excel file created');    
}
