const request = require("supertest");
const app = require("../../app");
const authService = require("../../services/auth.service");
require("dotenv").config();

const userId = "1234";
// strings
const STRINGS = require("../../utils/texts");
const { accessToken } = authService.generateToken({
  _id: userId,
});

describe("Post /api/register", () => {
  let response = {
    message: STRINGS.TEXTS.userCreated,
    status: STRINGS.STATUS_CODE.CREATED,
    success: true,
    data: {},
  };
  const body = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  };
  test("should login user", (done) => {
    request
      .agent(app)
      .post(`/api/v1/register`)
      .send(body)
      .set("Accept", "application/json")
      .expect(
        STRINGS.STATUS_CODE.CREATED,
        response,
        setTimeout(() => {
          done();
        }, 2000),
      );
  });
});
