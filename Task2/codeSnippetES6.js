const superagent = require("superagent");
const Shop = require("../models/shop");
const User = require("../models/user");

require("dotenv").config();

const inviteUser = async (req, res, next) => {
  const invitationBody = req.body;
  const shopId = req.params.shopId;

  // Set in environment variable. Also, only use /invitation.
  // const authUrl = "https://url.to.auth.system.com/invitation";
  const authUrl = process.env.URL;

  try {
    const invitationResponse = await superagent.post(authUrl).send(invitationBody);

    if (invitationResponse.statusCode === 201) {
      const createdUser = await User.findOneAndUpdate(
        {
          authId: invitationResponse.body.authId,
        },
        {
          authId: invitationResponse.body.authId,
          email: invitationBody.email,
        },
        {
          upsert: true,
          new: true,
        }
      ).exec();

      const shop = await Shop.findById(shopId);

      if (!shop) {
        return res.status(500).send({
          message: "No shop found",
        });
      }
      if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
        shop.invitations.push(invitationResponse.body.invitationId);
      }

      if (shop.users.indexOf(createdUser._id) === -1) {
        shop.users.push(createdUser);
      }
      shop.save();
    } else if (invitationResponse.status === 200) {
      res.status(400).json({
        error: true,
        message: "User already invited to this shop",
      });
    }

    res.status(200).json(invitationResponse);
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "An error ocurred",
    });
  }
};

module.exports = inviteUser;
