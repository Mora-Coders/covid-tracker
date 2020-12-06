/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        organizationId
        name
        email
        mobile
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationId
        name
        email
        mobile
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTemperatures = /* GraphQL */ `
  query SyncTemperatures(
    $filter: ModelTemperatureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTemperatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        personId
        value
        zipCode
        department
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getTemperature = /* GraphQL */ `
  query GetTemperature($id: ID!) {
    getTemperature(id: $id) {
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
export const listTemperatures = /* GraphQL */ `
  query ListTemperatures(
    $filter: ModelTemperatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemperatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        personId
        value
        zipCode
        department
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByOrganization = /* GraphQL */ `
  query UsersByOrganization(
    $organizationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByOrganization(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        name
        email
        mobile
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: AWSEmail
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationId
        name
        email
        mobile
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const personsByOrganization = /* GraphQL */ `
  query PersonsByOrganization(
    $organizationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personsByOrganization(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const personsByDepartmentByName = /* GraphQL */ `
  query PersonsByDepartmentByName(
    $department: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personsByDepartmentByName(
      department: $department
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const personsByLocationByName = /* GraphQL */ `
  query PersonsByLocationByName(
    $zipCode: Int
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personsByLocationByName(
      zipCode: $zipCode
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const personsByName = /* GraphQL */ `
  query PersonsByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const temperaturesByPerson = /* GraphQL */ `
  query TemperaturesByPerson(
    $personId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTemperatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    temperaturesByPerson(
      personId: $personId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        personId
        value
        zipCode
        department
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const temperaturesByDateByValue = /* GraphQL */ `
  query TemperaturesByDateByValue(
    $date: String
    $value: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTemperatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    temperaturesByDateByValue(
      date: $date
      value: $value
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        personId
        value
        zipCode
        department
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const temperaturesByDepartmentByDateByValue = /* GraphQL */ `
  query TemperaturesByDepartmentByDateByValue(
    $department: String
    $dateValue: ModelTemperatureByDepartmentByDateByValueCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTemperatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    temperaturesByDepartmentByDateByValue(
      department: $department
      dateValue: $dateValue
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        personId
        value
        zipCode
        department
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const temperaturesByLocationByDateByValue = /* GraphQL */ `
  query TemperaturesByLocationByDateByValue(
    $zipCode: Int
    $dateValue: ModelTemperatureByLocationByDateByValueCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTemperatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    temperaturesByLocationByDateByValue(
      zipCode: $zipCode
      dateValue: $dateValue
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        personId
        value
        zipCode
        department
        date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
