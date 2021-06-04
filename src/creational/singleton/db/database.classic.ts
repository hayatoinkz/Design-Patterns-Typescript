import { User } from '../interfaces/user';

export class DataBase {
  private static _instance: DataBase | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): DataBase {
    if (DataBase._instance === null) {
      DataBase._instance = new DataBase();
    }

    return DataBase._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
