/*VAMOS A CREAR UNA NUEVA DB*/
create database FORMULA_ONE;

/*DEFINICION DE TABLAS*/

create table DRIVERS(
	id SERIAL PRIMARY KEY,
	firstname VARCHAR(30) not null,
	lastname VARCHAR(30) not null,
	country_id INT,
	team_id INT
);

create table COUNTRIES(
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) not null
);

create table TEAMS(
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) not null,
	country_id INT
);


/*ALTERARLAS*/

alter table drivers 
add column titles INT;

/*CREAR LAS FK*/

alter table drivers 
add constraint driver_country_fk foreign key (country_id) references countries(id);

alter table drivers 
add constraint driver_team_fk foreign key (team_id) references teams(id);

alter table teams
add constraint team_country_fk foreign key (country_id) references countries (id);}


INSERT INTO public.countries
("name")
VALUES('ESPAÑA');

select * from countries;


INSERT INTO public.teams
("name", country_id)
VALUES('CADILLAC', 6);

select * from TEAMS;

INSERT INTO public.drivers
(firstname, lastname, country_id, team_id, titles)
values
('Charles', 'Leclerc', 11, 1, 0),
('Nico', 'Hulkenberg', 2, 2, 0),
('Max', 'VERSTAPPEN', 12, 3, 4),
('Fernando', 'Alonso', 13, 4, 2),
('Sergio','Pérez',10,6,0),
('Franco','Colapinto',9,5,0)
;

select 
	drivers.id, drivers.firstname ,drivers.lastname ,
	countries.name as country,
	teams.name as scuderia
from drivers 
join countries on country_id = countries.id
join teams on team_id= teams.id
;


truncate table drivers restart identity;








