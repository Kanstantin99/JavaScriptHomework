class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.listPermissions = [];
  }

  signin() {
    console.log(`${this.name} logged in`);
  }

  logout() {
    console.log(`${this.name} logged out`);
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Admin extends User {
  constructor(name, age) {
    super(name, age);
    this.listBans = [];
  }

  addBan(user) {
    console.log(`${user.name} has been banned`);
    this.listBans.push(user);
  }

  addPermission(permission) {
    console.log(`Permission ${permission} has been added`);
    this.listPermissions.push(permission);
  }
}

class Manager extends Admin {
  showListBans() {
    console.log(
      `List of bans: ${this.listBans.map((user) => user.name).join(", ")}`
    );
  }
}

class GeneralUser extends User {}

const user1 = new User("John", 25);
user1.signin();
user1.logout();
user1.showName();

const admin1 = new Admin("Admin", 30);
admin1.addBan(user1);
admin1.addPermission("edit");
console.log(admin1.listBans);
console.log(admin1.listPermissions);

const manager1 = new Manager("Manager", 35);
manager1.addBan(user1);
manager1.addPermission("delete");
manager1.showListBans();
console.log(manager1.listBans);
console.log(manager1.listPermissions);

const user2 = new GeneralUser("Jane", 20);
user2.showName();
