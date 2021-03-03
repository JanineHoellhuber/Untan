export interface Company{
    firmaid: string;
    firmenname?: string;
    taetigkeitsbeschreibung?: string;
    unternehmensgroesse?: number;
    umsatz?: number;
    mitarbeiterid?: number;
    adresseid?: number;
    gruendungsjahr?: Date;
    cashflow?: number;
    gesellschaftsformen?: string;
    eigenkapital?: number;
    bundesland?: string;
    ort?: string;
    plz?: number;
    strasse?: string;
    hausnummer?: string;
    leasing?: number;
    festangestellt?: number;
    auszubildende?: number;
    mitarbeiteranzahl?: number;
}