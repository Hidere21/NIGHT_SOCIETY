export interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  userImage: string;
  studyOrWork: string;
  friends: string[];
  accounts: string[];
}
