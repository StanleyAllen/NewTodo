/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      category
      text
      keys {
        items {
          id
          nextClicks
          createdAt
          updatedAt
          noteKeysId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        text
        keys {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKey = /* GraphQL */ `
  query GetKey($id: ID!) {
    getKey(id: $id) {
      id
      nextnote {
        id
        category
        text
        keys {
          nextToken
        }
        createdAt
        updatedAt
      }
      note {
        id
        category
        text
        keys {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextClicks
      createdAt
      updatedAt
      noteKeysId
    }
  }
`;
export const listKeys = /* GraphQL */ `
  query ListKeys(
    $filter: ModelKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nextnote {
          id
          category
          text
          createdAt
          updatedAt
        }
        note {
          id
          category
          text
          createdAt
          updatedAt
        }
        nextClicks
        createdAt
        updatedAt
        noteKeysId
      }
      nextToken
    }
  }
`;
