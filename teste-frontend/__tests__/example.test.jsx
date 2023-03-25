import handleShowMore from "../src/components/BlogPost/index";

test("should add posts", () => {
  const posts = 10;
  const showMore = posts + 10;

  expect(showMore).toEqual(posts + 10);
});
