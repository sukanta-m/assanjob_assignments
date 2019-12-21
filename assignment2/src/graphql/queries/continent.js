import { gql } from "apollo-boost";
export const getContinents = gql`
    query {
      continents {
        code
        name
      }
    }
`;

export const getContinent = `
    query continent($code: String) {
      continent(code: $code) {
        code,
        name,
        countries {
          code,
          name,
          native,
          phone,
          currency,
          languages {
            name
          },
          emoji,
          emojiU
        }
      }
    }
`;