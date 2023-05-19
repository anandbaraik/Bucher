import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Romance",
    description:
      "Remonatic books places its primary focus on the relationship and romantic love between two people, and usually has an emotionally satisfying and optimistic ending.",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    description:
      "Adventure fiction is a type of fiction that usually presents danger, or gives the reader a sense of excitement.",
  },
  {
    _id: uuid(),
    categoryName: "Mystery",
    description:
      "Mystery is a fiction genre where the nature of an event, usually a murder or other crime, remains mysterious until the end of the story.",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Fantasy books involve magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore.",
  },
  {
    _id: uuid(),
    categoryName: "Non-Fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Science",
    description:
      "Science books are about the systematic and organizing of knowledge in the form of testable explanations and predictions about the universe.",
  },
];
