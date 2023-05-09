const request = require("supertest");
const app = require("./app");
const properties = require("./properties.json");

describe("app", () => {
  it("GET /properties should retrieve a list of properties", async () => {
    await request(app)
      .get("/properties")
      .expect((res) => {
        expect(res.body).toEqual(properties);
      })
      .expect(200);
  });
});
