export type User = {
  id: string;
  name: string;
  age: string;
};

export type Car = {
  id: string;
  model: string;
};

export type Incident = {
  id: string;
  userID: string;
  userCarID: string;
  theirCarID: string;
};

type DB = {
  users: User[];
  cars: Car[];
  incidents: Incident[];
};

let currentID = 0;
const getID = () => `${currentID++}`;

const db: DB = {
  users: [
    {
      id: getID(),
      name: "Greg",
      age: "30",
    },
    {
      id: getID(),
      name: "Dan",
      age: "35",
    },
  ],
  cars: [
    {
      id: getID(),
      model: "Toyota",
    },
    {
      id: getID(),
      model: "Honda",
    },
  ],
  incidents: [
    {
      id: getID(),
      userID: "0",
      userCarID: "0",
      theirCarID: "1",
    },
  ],
};

const getUser = async (id: string) => {
  return db.users.find((user) => user.id === id);
};

const addUser = async (user: Omit<User, "id">) => {
  return db.users.push({ id: getID(), ...user });
};

const getCar = async (id: string) => {
  return db.cars.find((car) => car.id === id);
};

const addCar = async (car: Omit<Car, "id">) => {
  return db.cars.push({ id: getID(), ...car });
};

const getIncident = async (id: string) => {
  return db.incidents.find((incident) => incident.id === id);
};

const addIncident = async (incident: Omit<Incident, "id">) => {
  return db.incidents.push({ id: getID(), ...incident });
};

export const fakePrisma = {
  user: {
    get: getUser,
    add: addUser,
  },
  car: {
    get: getCar,
    add: addCar,
  },
  incident: {
    get: getIncident,
    add: addIncident,
  },
};
