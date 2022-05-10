// TYPES 

export type IdType = string | number | undefined; // Initial letters always UpperCase

let userId: IdType;
let adminId: IdType;

adminId = 2

userId = 'teste'

// userId = false   // type false is not assignable to type IdType


// TYPE ASSERTIONS 'as'
/* 
Used when TS doesn't know the type of a certain object 
(like a json response from an API for example) 
and we set the types that we expect for this object or variable must have
*/

type UserResponse = {
  ui: number;
  name: string;
  avatar: string;
}

let userResponse = {} as UserResponse ;
userResponse
