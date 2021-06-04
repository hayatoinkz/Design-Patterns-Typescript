import { DataBaseFunction } from './db/database.function';

const db = DataBaseFunction;

db.add({ name: 'Vinicius', age: 21 });
db.add({ name: 'Carlos', age: 22 });
db.add({ name: 'Hugo', age: 24 });
db.add({ name: 'Irwin', age: 22 });

export { db };
