import config from "../config/config";
import { userRoles } from "../modules/User/user.interface";
import { User } from "../modules/User/user.model";

const superUser = {
  username: "super@assignment6",
  email: "touhidcodes@gmail.com",
  password: config.super_admin_password,
  role: userRoles.superAdmin,
};

const seedSuperAdmin = async () => {
  //when database is connected, we will check is there any user who is super admin
  const isSuperAdminExits = await User.findOne({ role: userRoles.superAdmin });

  if (!isSuperAdminExits) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
