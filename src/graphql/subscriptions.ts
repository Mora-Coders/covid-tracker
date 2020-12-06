/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
      id
      name
      users {
        nextToken
        startedAt
      }
      persons {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
      id
      name
      users {
        nextToken
        startedAt
      }
      persons {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
      id
      name
      users {
        nextToken
        startedAt
      }
      persons {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      organizationId
      name
      email
      mobile
      organization {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      organizationId
      name
      email
      mobile
      organization {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      organizationId
      name
      email
      mobile
      organization {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($owner: String) {
    onCreatePerson(owner: $owner) {
      id
      organizationId
      name
      nic
      mobile
      type
      department
      country
      zipCode
      address
      latitude
      longitude
      organization {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      temperatureValues {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($owner: String) {
    onUpdatePerson(owner: $owner) {
      id
      organizationId
      name
      nic
      mobile
      type
      department
      country
      zipCode
      address
      latitude
      longitude
      organization {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      temperatureValues {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($owner: String) {
    onDeletePerson(owner: $owner) {
      id
      organizationId
      name
      nic
      mobile
      type
      department
      country
      zipCode
      address
      latitude
      longitude
      organization {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      temperatureValues {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTemperature = /* GraphQL */ `
  subscription OnCreateTemperature($owner: String) {
    onCreateTemperature(owner: $owner) {
      id
      personId
      value
      zipCode
      department
      date
      person {
        id
        organizationId
        name
        nic
        mobile
        type
        department
        country
        zipCode
        address
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTemperature = /* GraphQL */ `
  subscription OnUpdateTemperature($owner: String) {
    onUpdateTemperature(owner: $owner) {
      id
      personId
      value
      zipCode
      department
      date
      person {
        id
        organizationId
        name
        nic
        mobile
        type
        department
        country
        zipCode
        address
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTemperature = /* GraphQL */ `
  subscription OnDeleteTemperature($owner: String) {
    onDeleteTemperature(owner: $owner) {
      id
      personId
      value
      zipCode
      department
      date
      person {
        id
        organizationId
        name
        nic
        mobile
        type
        department
        country
        zipCode
        address
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
