import bcrypt from "bcrypt";

bcrypt.hash("159753", 8).then((pass) => {
  console.log(pass);
});
