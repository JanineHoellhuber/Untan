import { Employee } from '../interface/employee';
import { Addresse } from './addresse';

export interface Company{
    firmaid: string;
    firmenname?: string;
    taetigkeit?: string;
    groesse?: number;
    umsatz?: number;
    mitarbeiterId?: number;
    adressId?: number;
    gruendung?: Date;
    cashflow?: number;
    form?: string;
    kapital?: number;
}