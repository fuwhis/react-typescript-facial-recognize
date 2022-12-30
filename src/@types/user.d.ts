/** src/@types/user.d.ts */

interface IUser {
  name: string;
  email: string;
}

export type userContextType = {
  user: IUser | null;
};

type Action = {
  type: 'SET_USER';
  user: IUser;
};
