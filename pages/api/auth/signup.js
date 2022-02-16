// api/users.js

import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import bcryptjs from "bcryptjs";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  

  switch (method) {
    case "POST":
      try {
        let {
          email,
          lastname,
          firstname,
          birthday,
          nationality,
          speciality,
          password,
        } = req.body;
        //console.log(req.body);


        if (!firstname || typeof firstname !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid firstname" });
        }

        if (!lastname || typeof lastname !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid lastname" });
        }

        

        if (!birthday || typeof birthday !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid birthday" });
        }

        if (!nationality || typeof nationality !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid nationality" });
        }

        if (!speciality || typeof speciality !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid speciality" });
        }

        if (!email || typeof email !== "string") {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid email" });
        }
        if (!password) {
          return res
            .status(400)
            .json({ success: "false", error: "Invalid password" });
        }
        if (password.length < 2) {
          return res.status(400).json({
            success: "false",
            error: "Password too small. Should be at least 6 characters ",
          });
        }
        password = await bcryptjs.hash(password, 10);

        const user = await User.create({
          email,
          lastname,
          password,
          firstname,
          birthday,
          nationality,
          speciality,
        });

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        if (error.code === 11000) {
          return res.status(400).json({
            success: false,
            error: 401,
            data: "User already in the DB",
          });
        }
        res.status(400).json({ success: false, data: "some error" });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
