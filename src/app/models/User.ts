import Sequelize, { Model } from "sequelize";
import bcrypt from "bcrypt";
import database from "../../data/database";

class User extends Model {
  public id!: number;

  public name!: string;

  public password!: string;

  public passwordHash!: string;

  public username!: string;

  public email!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.passwordHash);
  }
}

User.init(
  {
    name: Sequelize.STRING,
    password: Sequelize.VIRTUAL,
    passwordHash: Sequelize.STRING,
    email: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
    freezeTableName: false,
  }
);

User.addHook("beforeSave", async (user: User): Promise<void> => {
  if (user.password) {
    user.passwordHash = await bcrypt.hash(user.password, 8);
  }
});

export default User;
