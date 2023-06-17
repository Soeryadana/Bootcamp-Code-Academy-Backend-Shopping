import bcrypt from "bcrypt";

import models, { sequelize } from "../models/init-models";

const createUser = async (req, res, next) => {
  if (req.body.username == "") {
    return res.status(401).send({ message: "Failed! Username is not null" });
  } else if (req.body.password == "") {
    return res.status(401).send({ message: "Failed! Password is not null" });
  } else if (req.body.email == "") {
    return res.status(401).send({ message: "Failed! Email is not null" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(req.body.user_password, salt);

      const user = await req.context.models.users.create({
        username: req.body.username,
        user_password: passHash,
        createdAt: Date.now(),
      });
      req.user = user;
      next();
    } catch (error) {
      return res.send(error);
    }
  }
};

const findAllByUsername = async (username) => {
    const user = await models.users.findOne({
        where: { username: username },
      })
      .catch((err) => {
        return err;
      });
      return user.toJSON()
  };
  
 
export default {
  createUser,
  findAllByUsername
};
