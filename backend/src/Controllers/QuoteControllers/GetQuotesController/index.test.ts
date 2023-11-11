app.use(express.json());

app.use("/api/books", bookRoute);

jest.mock("../data/books.json", () => [
  { name: "Call of the wild", author: "Louis wilder", id: 1 },
  { name: "Love like no other", author: "Charlie Bronsey", id: 2 },
  { name: "Dream", author: "Jamie Phillips", id: 3 },
]);

describe("Integration test book api", () => {
  it("GET /ap/books - success - get all the books", async () => {
    const { body, statusCode } = await request(app).get("/api/books");

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          author: expect.any(String),
        }),
      ])
    );
    expect(statusCode).toBe(200);
  });
});
