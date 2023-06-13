class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  signin() {
    console.log(`${this.name} signed in.`);
  }
}

class Admin extends User {
  #bannedUsers = [];

  #addUserToBanList(user) {
    this.#bannedUsers.push(user);
  }

  #removeUserFromBanList(user) {
    const index = this.#bannedUsers.indexOf(user);
    if (index !== -1) {
      this.#bannedUsers.splice(index, 1);
    }
  }

  #isUserBanned(user) {
    return this.#bannedUsers.includes(user);
  }

  #hasPermission(user) {
    // some logic to check if the user has permission
    return true;
  }

  ban(user) {
    if (!this.#isUserBanned(user) && this.#hasPermission(user)) {
      this.#addUserToBanList(user);
      console.log(`${user.name} has been banned.`);
    }
  }

  addPermission(user) {
    // some logic to add permission to the user
    console.log(`${user.name} has been granted permission.`);
  }

  listBan() {
    console.log(
      `Banned users: ${this.#bannedUsers.map((user) => user.name).join(", ")}`
    );
  }
}

class Manager extends Admin {
  showListBan() {
    this.listBan();
  }
}

class GeneralUser extends User {
  buyThings() {
    console.log(`${this.name} bought something.`);
  }
}
