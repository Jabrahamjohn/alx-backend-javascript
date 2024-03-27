/// <reference path="./crud.d.ts" />

import { RowID, RowElement, CRUD } from "./interface"; // Import the CRUD object from the interface module
import { insertRow, deleteRow, updateRow } from "./crud";

const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };
const newRowID: RowID = CRUD.insertRow(row); // Use the CRUD object to call the insertRow method
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

CRUD.updateRow(newRowID, updatedRow); // Use the CRUD object to call the updateRow method
CRUD.deleteRow(newRowID); // Use the CRUD object to call the deleteRow method

