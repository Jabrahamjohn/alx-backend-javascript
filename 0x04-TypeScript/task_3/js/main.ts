/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import { insertRow, deleteRow, updateRow } from "./crud";

const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

const newRowID: RowID = insertRow(row);