drop table Mitarbeiter cascade constraints;
drop table Adresse cascade constraints;
drop table Firma cascade constraints;


create table Mitarbeiter
(
    Mitarbeiterid number not null primary key,
    Leasing number,
    Festangestellt number,
    Auszubildende number,
    Mitarbeiteranzahl number
);

create table Adresse
(
    Adresseid number not null primary key,
    Bundesland varchar2(30) not null,
    Ort varchar2(30) not null,
    PLZ number,
    Strasse varchar2(30) not null,
    Hausnummer varchar2(50)
);


create table Firma
(
    Firmaid number not null primary key,
    Firmenname varchar2(30) not null,
    Taetigkeitsbeschreibung varchar2(30) not null,
    Unternehmensgroesse number,
    Umsatz number,
    Mitarbeiterid number references Mitarbeiter(Mitarbeiterid),
    Adresseid number references Adresse(Adresseid),
    Gruendungsjahr date,
    Cashflow number,
    Gesellschaftsformen varchar2(30) not null,
    Eigenkapital number

    

);
