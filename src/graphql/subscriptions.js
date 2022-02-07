/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey {
    onCreateKey {
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
export const onUpdateKey = /* GraphQL */ `
  subscription OnUpdateKey {
    onUpdateKey {
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
export const onDeleteKey = /* GraphQL */ `
  subscription OnDeleteKey {
    onDeleteKey {
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
