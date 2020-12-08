/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  organizationId: string,
  name?: string | null,
  email: string,
  mobile?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  organizationId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  organizationId?: string | null,
  name?: string | null,
  email?: string | null,
  mobile?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePersonInput = {
  id?: string | null,
  organizationId: string,
  name?: string | null,
  nic: string,
  mobile?: string | null,
  type?: string | null,
  department?: string | null,
  country?: string | null,
  zipCode?: number | null,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  _version?: number | null,
};

export type ModelPersonConditionInput = {
  organizationId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nic?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  type?: ModelStringInput | null,
  department?: ModelStringInput | null,
  country?: ModelStringInput | null,
  zipCode?: ModelIntInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePersonInput = {
  id: string,
  organizationId?: string | null,
  name?: string | null,
  nic?: string | null,
  mobile?: string | null,
  type?: string | null,
  department?: string | null,
  country?: string | null,
  zipCode?: number | null,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  _version?: number | null,
};

export type DeletePersonInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTemperatureInput = {
  id?: string | null,
  personId: string,
  value?: number | null,
  zipCode?: number | null,
  department?: string | null,
  date: string,
  _version?: number | null,
};

export type ModelTemperatureConditionInput = {
  personId?: ModelIDInput | null,
  value?: ModelFloatInput | null,
  zipCode?: ModelIntInput | null,
  department?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTemperatureConditionInput | null > | null,
  or?: Array< ModelTemperatureConditionInput | null > | null,
  not?: ModelTemperatureConditionInput | null,
};

export type UpdateTemperatureInput = {
  id: string,
  personId?: string | null,
  value?: number | null,
  zipCode?: number | null,
  department?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteTemperatureInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  organizationId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  nic?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  type?: ModelStringInput | null,
  department?: ModelStringInput | null,
  country?: ModelStringInput | null,
  zipCode?: ModelIntInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
};

export type ModelTemperatureFilterInput = {
  id?: ModelIDInput | null,
  personId?: ModelIDInput | null,
  value?: ModelFloatInput | null,
  zipCode?: ModelIntInput | null,
  department?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTemperatureFilterInput | null > | null,
  or?: Array< ModelTemperatureFilterInput | null > | null,
  not?: ModelTemperatureFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelTemperatureByDepartmentByDateByValueCompositeKeyConditionInput = {
  eq?: ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null,
  le?: ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null,
  lt?: ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null,
  ge?: ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null,
  gt?: ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null,
  between?: Array< ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null > | null,
  beginsWith?: ModelTemperatureByDepartmentByDateByValueCompositeKeyInput | null,
};

export type ModelTemperatureByDepartmentByDateByValueCompositeKeyInput = {
  date?: string | null,
  value?: number | null,
};

export type ModelTemperatureByLocationByDateByValueCompositeKeyConditionInput = {
  eq?: ModelTemperatureByLocationByDateByValueCompositeKeyInput | null,
  le?: ModelTemperatureByLocationByDateByValueCompositeKeyInput | null,
  lt?: ModelTemperatureByLocationByDateByValueCompositeKeyInput | null,
  ge?: ModelTemperatureByLocationByDateByValueCompositeKeyInput | null,
  gt?: ModelTemperatureByLocationByDateByValueCompositeKeyInput | null,
  between?: Array< ModelTemperatureByLocationByDateByValueCompositeKeyInput | null > | null,
  beginsWith?: ModelTemperatureByLocationByDateByValueCompositeKeyInput | null,
};

export type ModelTemperatureByLocationByDateByValueCompositeKeyInput = {
  date?: string | null,
  value?: number | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateTemperatureMutationVariables = {
  input: CreateTemperatureInput,
  condition?: ModelTemperatureConditionInput | null,
};

export type CreateTemperatureMutation = {
  createTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateTemperatureMutationVariables = {
  input: UpdateTemperatureInput,
  condition?: ModelTemperatureConditionInput | null,
};

export type UpdateTemperatureMutation = {
  updateTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteTemperatureMutationVariables = {
  input: DeleteTemperatureInput,
  condition?: ModelTemperatureConditionInput | null,
};

export type DeleteTemperatureMutation = {
  deleteTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type SyncOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationsQuery = {
  syncOrganizations:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      organizationId: string,
      name: string | null,
      email: string,
      mobile: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      organizationId: string,
      name: string | null,
      email: string,
      mobile: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPeopleQuery = {
  syncPeople:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListPersonsQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonsQuery = {
  listPersons:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTemperaturesQueryVariables = {
  filter?: ModelTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTemperaturesQuery = {
  syncTemperatures:  {
    __typename: "ModelTemperatureConnection",
    items:  Array< {
      __typename: "Temperature",
      id: string,
      personId: string,
      value: number | null,
      zipCode: number | null,
      department: string | null,
      date: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTemperatureQueryVariables = {
  id: string,
};

export type GetTemperatureQuery = {
  getTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListTemperaturesQueryVariables = {
  filter?: ModelTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemperaturesQuery = {
  listTemperatures:  {
    __typename: "ModelTemperatureConnection",
    items:  Array< {
      __typename: "Temperature",
      id: string,
      personId: string,
      value: number | null,
      zipCode: number | null,
      department: string | null,
      date: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type UsersByOrganizationQueryVariables = {
  organizationId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByOrganizationQuery = {
  usersByOrganization:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      organizationId: string,
      name: string | null,
      email: string,
      mobile: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type UsersByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByEmailQuery = {
  usersByEmail:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      organizationId: string,
      name: string | null,
      email: string,
      mobile: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type PersonsByOrganizationQueryVariables = {
  organizationId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonsByOrganizationQuery = {
  personsByOrganization:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type PersonsByDepartmentByNameQueryVariables = {
  department?: string | null,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonsByDepartmentByNameQuery = {
  personsByDepartmentByName:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type PersonsByLocationByNameQueryVariables = {
  zipCode?: number | null,
  name?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonsByLocationByNameQuery = {
  personsByLocationByName:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type PersonsByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PersonsByNameQuery = {
  personsByName:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type TemperaturesByPersonQueryVariables = {
  personId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemperaturesByPersonQuery = {
  temperaturesByPerson:  {
    __typename: "ModelTemperatureConnection",
    items:  Array< {
      __typename: "Temperature",
      id: string,
      personId: string,
      value: number | null,
      zipCode: number | null,
      department: string | null,
      date: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type TemperaturesByDateByValueQueryVariables = {
  date?: string | null,
  value?: ModelFloatKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemperaturesByDateByValueQuery = {
  temperaturesByDateByValue:  {
    __typename: "ModelTemperatureConnection",
    items:  Array< {
      __typename: "Temperature",
      id: string,
      personId: string,
      value: number | null,
      zipCode: number | null,
      department: string | null,
      date: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type TemperaturesByDepartmentByDateByValueQueryVariables = {
  department?: string | null,
  dateValue?: ModelTemperatureByDepartmentByDateByValueCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemperaturesByDepartmentByDateByValueQuery = {
  temperaturesByDepartmentByDateByValue:  {
    __typename: "ModelTemperatureConnection",
    items:  Array< {
      __typename: "Temperature",
      id: string,
      personId: string,
      value: number | null,
      zipCode: number | null,
      department: string | null,
      date: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type TemperaturesByLocationByDateByValueQueryVariables = {
  zipCode?: number | null,
  dateValue?: ModelTemperatureByLocationByDateByValueCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTemperatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TemperaturesByLocationByDateByValueQuery = {
  temperaturesByLocationByDateByValue:  {
    __typename: "ModelTemperatureConnection",
    items:  Array< {
      __typename: "Temperature",
      id: string,
      personId: string,
      value: number | null,
      zipCode: number | null,
      department: string | null,
      date: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization:  {
    __typename: "Organization",
    id: string,
    name: string,
    users:  {
      __typename: "ModelUserConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    persons:  {
      __typename: "ModelPersonConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    organizationId: string,
    name: string | null,
    email: string,
    mobile: string | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreatePersonSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdatePersonSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeletePersonSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson:  {
    __typename: "Person",
    id: string,
    organizationId: string,
    name: string | null,
    nic: string,
    mobile: string | null,
    type: string | null,
    department: string | null,
    country: string | null,
    zipCode: number | null,
    address: string | null,
    latitude: number | null,
    longitude: number | null,
    organization:  {
      __typename: "Organization",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    temperatureValues:  {
      __typename: "ModelTemperatureConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateTemperatureSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTemperatureSubscription = {
  onCreateTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateTemperatureSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTemperatureSubscription = {
  onUpdateTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteTemperatureSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTemperatureSubscription = {
  onDeleteTemperature:  {
    __typename: "Temperature",
    id: string,
    personId: string,
    value: number | null,
    zipCode: number | null,
    department: string | null,
    date: string,
    person:  {
      __typename: "Person",
      id: string,
      organizationId: string,
      name: string | null,
      nic: string,
      mobile: string | null,
      type: string | null,
      department: string | null,
      country: string | null,
      zipCode: number | null,
      address: string | null,
      latitude: number | null,
      longitude: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
