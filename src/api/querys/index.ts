import { gql } from "@apollo/client";

const Home = gql`
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

const ProjectsAPI = gql`
	query {
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

export { Home, ProjectsAPI };
