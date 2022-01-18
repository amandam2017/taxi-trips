-- insert into region(id, name) values (1, 'Durban');
-- insert into region(id, name) values (2, 'Cape Town');
-- insert into region(id, name) values (3, 'Gauteng');

INSERT INTO region (region_name) VALUES ('Gauteng');
INSERT INTO region (region_name) VALUES ('Cape Town');
INSERT INTO region (region_name) VALUES ('Durban');

INSERT INTO routes (name, fare) VALUES ('Randburg', 18);
INSERT INTO routes (name, fare) VALUES ('Khayelitsha', 22);
INSERT INTO routes (name, fare) VALUES ('Umlazi', 30);

INSERT INTO taxi (reg_number, region_id) VALUES ('GP 125478', 1);
INSERT INTO taxi (reg_number, region_id) VALUES ('CY 125478', 2);
INSERT INTO taxi (reg_number, region_id) VALUES ('NUZ 125478', 3);

INSERT INTO trip (routes_id, taxi_id) VALUES (1, 1);
INSERT INTO trip (routes_id, taxi_id) VALUES (2, 2);
INSERT INTO trip (routes_id, taxi_id) VALUES (3, 3);


