import { RowID, RowElement } from "./interface";

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowID: RowID): void;
export declare function updateRow(rowID: RowID, row: RowElement): number;