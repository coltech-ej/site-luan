import { gql } from "@apollo/client";

const GET_HOME = gql`
	query {
		homes {
			data {
				id
				attributes {
					name
					type
					banner {
						data {
							attributes {
								formats
							}
						}
					}
				}
			}
		}
	}
`;

const GET_PROJECTS = gql`
	query {
  projects {
    data {
      id
      attributes {
        name
        location
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;

export { GET_HOME, GET_PROJECTS };
