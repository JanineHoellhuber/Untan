import { Employee } from './employee';
import { Addresse } from './addresse';

export interface Company{
    firmaid: string;
    firmenname?: string;
    taetigkeit?: string;
    groesse?: number;
    umsatz?: number;
    mitarbeiterId?: Employee;
    adressId?: Addresse;
    gruendung?: Date;
    cashflow?: number;
    form?: string;
    kapital?: number;
}