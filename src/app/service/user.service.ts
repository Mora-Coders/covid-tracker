import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLResult } from "@aws-amplify/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async saveUser(user: any){
    try {
      const savedUser = (await API.graphql(graphqlOperation(queries.usersByEmail, {email: user.attributes.username}))) as GraphQLResult<any>;
      if(savedUser.data.usersByEmail.items.length == 0){
        const userDetails = {
          organizationId: 'd0107c06-0615-494d-877d-e517a7c6f15a',
          name: user.attributes.name,
          email: user.attributes.username,
          mobile: user.attributes.mobile
        };
        const userToSave = API.graphql({ query: mutations.createUser, variables: {input: userDetails}});
      }
    } catch (error) {
      console.error(error);
    }
  }

}
