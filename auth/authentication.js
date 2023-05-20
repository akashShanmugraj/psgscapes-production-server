const jwt = require("jsonwebtoken");
const encryption = require("./encrypt.js");
const userSchema = require("../models/user.js");
class tokenManager {
  static async renewToken(req, res, next) {
    try {
      const rollnumber = req.body.rollnumber;
      const oldToken = req.body.token;
      const encryptedauthenticationText = req.body.auth;
      if (!rollnumber) {
        res.status(400).send("rollnumber-not-passed");
      } else if (!oldToken) {
        res.status(400).send("token-not-passed");
      } else if (!encryptedauthenticationText) {
        res.status(400).send("authentication-text-not-passed");
      }

      const userData = await userSchema.find({ _id: rollnumber });
      const password = await userData[0].password;

      const authenticationText = await encryption.decrypt(
        encryptedauthenticationText,
        password
      );

      if (authenticationText.token === oldToken) {
        const newToken = jwt.sign({ rollnumber: rollnumber }, password, {
          expiresIn: "10m",
        });

        const encryptedAuthenticationText = await encryption.encrypt(
          JSON.stringify({ rollnumber: rollnumber, token: newToken }),
          userData[0].password
        );

        res.send({
          token: newToken,
          authenticationText: encryptedAuthenticationText,
          info: "New token expires in 10 minutes ",
        });
      } else {
        res.status(400).send("mismatching-tokens");
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async loginToken(req, res, next) {
    try {
      const tutorcode = req.body.tutorcode;
      const rollnumber = req.body.rollnumber;
      const password = req.body.password;
      const actualtutorcode = "1143";
      const userData = await userSchema.find({ _id: rollnumber });

      // const authenticationText = JSON.stringify({"rollnumber": rollnum, "token":newToken})
      if (tutorcode === actualtutorcode && password === userData[0].password) {
        const newToken = jwt.sign(
          { rollnumber: userData[0]["rollnumber"] },
          userData[0]["password"],
          { expiresIn: "10m" }
        );

        const encryptedAuthenticationText = await encryption.encrypt(
          JSON.stringify({ rollnumber: rollnumber, token: newToken }),
          userData[0]["password"]
        );
        res.send({
          token: newToken,
          authenticationText: encryptedAuthenticationText,
          info: "New Token expires in 10 minutes",
        });
      } else {
        if (tutorcode !== actualtutorcode) {
          res.send("Invalid Tutor Code").status(400);
        } else {
          res.send("Invalid Password").status(400);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async authHelp(req, res, next) {
    res.sendFile(
      "C:/Users/akash/Documents/experimental-backend-psg-scapes/security/backend-psg-scapes/auth/authhelp.html"
    );
  }

  static async verifyText(req, res, next) {
    const authText = req.body.auth;
    const password = req.body.password;
    let decryptedObject = await encryption.decrypt(authText, password);
    res.send(JSON.stringify(decryptedObject));
  }

  static async verifyToken(req, res, callbackfunction) {
    try {
      const token = req.body.token;
      const rollnumber = req.body.rollnumber;

      if (!token) {
        res.status(400).json({ error: "token-not-passed" });
      } else if (!rollnumber) {
        res.status(400).json({ error: "rollnumber-not-passed" });
      }

      const userData = await userSchema.find({ _id: rollnumber });

      const password = await userData[0].password;
      
      jwt.verify(token, password);
      console.log("verified");
      await callbackfunction();
      return 200;
    } catch (e) {
      if (e.name === "JsonWebTokenError") {
        console.log(e);
        res.status(498).json({ error: "invalid-token" });
      } else if (e.name === "TypeError") {
        res.status(404).json({ error: "invalid-rollnumber" })
      } else if (e.name === "TokenExpiredError") {
        console.log(e);
        res.status(498).json({ error: "expired-token" });
      } else {
        console.log(e);
      }
    }
  }
}

module.exports = tokenManager;
