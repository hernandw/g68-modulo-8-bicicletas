create database oxford_db

create table bicicletas (
id serial primary key,
marca varchar(50),
modelo varchar(50),
precio int,
stock int
);