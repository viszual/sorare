import { gql } from "@apollo/client";

export const GET_PLAYER_BY_SLUG = gql`
  query Player($slug: String!) {
    Player(slug: $slug) {
      displayName
      age
      position
      shirtNumber
      activeClub {
        name
      }
    }
  }
`;

// # Write your query or mutation here
// query PlayerBySlug($slug: String!) {
//   player(slug: $slug) {
//     displayName
//     age
//     position
//     shirtNumber
//     activeClub {
//       name
//     }
//   }
// }
