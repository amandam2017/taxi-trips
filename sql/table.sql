create table routes(
    id serial not null primary key,
    name text not null,
    fare decimal(10,2)
);

create table region(
    id serial not null primary key,
    region_name text not null
);

create table taxi(
    id serial not null primary key,
    reg_number text not null,
    region_id int not null,
    FOREIGN KEY (region_id) REFERENCES region(id)
);

create table trip(
    id serial not null primary key,
    routes_id int not null,
    taxi_id int not null,
    FOREIGN KEY (routes_id) REFERENCES routes (id),
    FOREIGN KEY (taxi_id) REFERENCES taxi (id)
);