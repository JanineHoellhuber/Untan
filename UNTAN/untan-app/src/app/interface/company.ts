import { Employee } from '../interface/employee';
import { Address } from '../interface/address';

export interface Company{
    id: number;
    name: string;
    taetigkeit: string;
    groesse: number;
    umsatz: number;
    mitarbeiterId: number;
    adressId: number;
    gruendung: Date;
    cashflow: number;
    form: string;
    kapital: number;
}