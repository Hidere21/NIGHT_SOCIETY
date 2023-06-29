export interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  friends: string[];
  accounts: string[];
  studyOrWork: string;
  userImage: string;
}
