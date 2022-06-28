import { gql } from "@apollo/client";

const Projects = gql`
  query {
    projects {
      data {
        id
        attributes{
            name
            banner
        }
      }
    }
  }
`;

export default Projects;