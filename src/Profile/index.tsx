import { graphql, makeFragmentData } from "../gql";
import { customMakeFragmentData } from "./custom-graphql";

const Profile_userFragment_1 = graphql(`
  fragment Profile_user_1 on User {
    id
    name
    avatarUrl
  }
`);

const Profile_userFragment_2 = graphql(`
  fragment Profile_user_2 on User {
    id
    name
    email
  }
`);

const Profile_queryFragment = graphql(`
  fragment Profile_query on Query {
    currentUser {
      ...Profile_user_1
      ...Profile_user_2
    }
  }
`);

// not be able to be typed properly (even if I tried to type it with `makeFragment`, `Profile_userFragment_1` and `Profile_userFragment_2`)
makeFragmentData(
  {
    currentUser: {
      id: "123",
      name: "alice",
      avatarUrl: "https://image.example/alice.png",
      email: "alice@mail.com",
    },
  },
  Profile_queryFragment
);

// be typed well!
customMakeFragmentData(
  {
    currentUser: {
      id: "123",
      name: "alice",
      avatarUrl: "https://image.example/alice.png",
      email: "alice@mail.com",
    },
  },
  Profile_queryFragment
);
