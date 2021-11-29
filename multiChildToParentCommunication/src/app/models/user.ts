export interface User {
  name: string;
  surname: string;
  dateOfBirth: Date;
  city: string;
}

export const USERS_LIST: Array<User> = [
  {
    name: 'Adams',
    surname: 'White',
    dateOfBirth: new Date('10/11/1991'),
    city: 'Boston',
  },
  {
    name: 'Frank',
    surname: 'McDonalds',
    dateOfBirth: new Date('4/12/1985'),
    city: 'Milwaukee',
  },
  {
    name: 'Kevin',
    surname: 'Smith',
    dateOfBirth: new Date('11/2/1966'),
    city: 'Seattle',
  },
  {
    name: 'George',
    surname: 'Irwin',
    dateOfBirth: new Date('10/5/1974'),
    city: 'Dallas',
  },
];
