import { DataBaseFunction } from './db/database.function';
import { db as dbFromModuleA } from './module.a';

const db = DataBaseFunction;

db.add({ name: 'Roberto', age: 21 });
db.add({ name: 'Fernando', age: 22 });
db.add({ name: 'Eduardo', age: 24 });

db.show();

console.log(db === dbFromModuleA);
