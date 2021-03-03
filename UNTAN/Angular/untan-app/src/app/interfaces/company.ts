import { Employee } from './employee';
import { Addresse } from './addresse';

export interface Company{
    firmaid: string;
    firmenname?: string;
    taetigkeitsbeschreibung?: string;
    unternehmensgroesse?: number;
    umsatz?: number;
    mitarbeiterid?: Employee;
    adresseid?: Addresse;
    gruendungsjahr?: Date;
    cashflow?: number;
    gesellschaftsformen?: string;
    eigenkapital?: number;
}