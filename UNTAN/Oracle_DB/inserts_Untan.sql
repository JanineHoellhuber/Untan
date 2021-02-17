
insert into Mitarbeiter (Mitarbeiterid, Leasing, Festangestellt, Auszubildende,Mitarbeiteranzahl) values (1, 10000000, 20000000,30000000, 60000000);
insert into Mitarbeiter (Mitarbeiterid, Leasing, Festangestellt, Auszubildende,Mitarbeiteranzahl) values (2, 700000000, 300000000,400000000, 1400000000);
insert into Mitarbeiter (Mitarbeiterid, Leasing, Festangestellt, Auszubildende,Mitarbeiteranzahl) values (3, 1250000000, 1250000000,1250000000, 3750000000);

insert into Adresse (Adresseid, Bundesland ,Ort, PLZ, Straße, Hausnummer) values (1, 'Salzburg', 'Hof bei Salzburg', 5322, 'Steinstraße', 13);
insert into Adresse (Adresseid, Bundesland ,Ort, PLZ, Straße, Hausnummer) values (2, 'Burgenland', 'Parndorf', 7111, 'Turmweg', 3);
insert into Adresse (Adresseid, Bundesland ,Ort, PLZ, Straße, Hausnummer) values (3, 'Oberösterreich', 'Linz', 4030, 'Blumenweg', 7);

INSERT INTO Firma (Firmaid, FirmenName, Tätigkeitsbeschreibung, Unternehmensgröße, Umsatz, Mitarbeiterid, Adresseid, Gründungsjahr, Cashflow, Gesellschaftsformen, Eigenkapital) values (1, 'Billa', 'Lebensmittelkette', 1000, 300000, 2, 1, DATE '2000-10-13',3000000, 'Ges', 400000);
INSERT INTO Firma (Firmaid, FirmenName, Tätigkeitsbeschreibung, Unternehmensgröße, Umsatz, Mitarbeiterid, Adresseid, Gründungsjahr, Cashflow, Gesellschaftsformen, Eigenkapital) values (2, 'Saturn', 'Elektronik-Fachmarktkette', 1042, 5000000, 3, 3, DATE '2013-10-10',3000000, 'GmbH', 6000000);
INSERT INTO Firma (Firmaid, FirmenName, Tätigkeitsbeschreibung, Unternehmensgröße, Umsatz, Mitarbeiterid, Adresseid, Gründungsjahr, Cashflow, Gesellschaftsformen, Eigenkapital) values (3, 'Microsoft', 'Hard- und Softwareentwickler', 5000, 30000000, 1, 2, DATE '1975-03-24',7000000, 'Kg', 50000000);
