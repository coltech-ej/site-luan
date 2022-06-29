import { gql } from "@apollo/client";

const GET_HOME = gql`
	query {
		projects {
			data {
				id
				attributes {
					name
					banner
				}
			}
		}
	}
`;

const GET_PROJECTS = gql`
	query getProjects {
		projects {
			data {
				id
				attributes {
					name
					basics {
						location
					}
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

export { GET_HOME, GET_PROJECTS };
