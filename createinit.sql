create database my_database;
\c my_database
CREATE TABLE personnel (
    id SERIAL PRIMARY KEY,       -- Unique identifier for each personnel
    name VARCHAR(100) NOT NULL,  -- Name of the personnel
    sex VARCHAR(10),
    age INT CHECK (age > 0),     -- Age of the personnel
    speciality VARCHAR(100)      -- Specialty or profession of the personnel
);

CREATE TABLE vehicle (
    id SERIAL PRIMARY KEY,       -- Unique identifier for each vehicle
    type VARCHAR(100) NOT NULL,  -- Type of the vehicle (e.g., Car, Truck, etc.)
    operational BOOLEAN DEFAULT TRUE -- Operational status of the vehicle
);

INSERT INTO personnel (name, sex, age, speciality) 
VALUES 
('Alice Johnson', 'Female', 30, 'Engineer'),
('Bob Smith', 'Male', 45, 'Technician'),
('Carol White', 'Female', 29, 'Medic'),
('David Brown', 'Male', 35, 'Pilot'),
('Eve Black', 'Female', 40, 'Scientist');

INSERT INTO vehicle (type, operational) 
VALUES 
('Ambulance', TRUE),
('Fire Truck', TRUE),
('Car', FALSE),
('Helicopter', TRUE),
('Tank', FALSE);