import { gql } from 'apollo-server';

const agendaTypeDefs = gql`
  # A  User
  type Agenda {
    id: ID!

    createdAt: Int
    description: String
    image: String
    name: String!
    updatedAt: Int
  }

  input AddAgendaInput {
    description: String
    image: String
    name: String!
  }

  type AddAgendaResponse {
    success: Boolean
    agenda: Agenda
    error: Error
  }

  extend type Query {
    agenda(id: ID!): Agenda
    agendas(orderBy: String): [Agenda]
  }

  extend type Mutation {
    addAgenda(input: AddAgendaInput!): AddAgendaResponse
  }
`;

export default agendaTypeDefs;
