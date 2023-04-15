interface IUser {
  name: string;
  username: string;
}

export interface IContext {
	authenticate: (username: string) => Promise<void>;
	logout: () => void;
	user: IUser | undefined;
}

export interface IAuthProvider {
	children: JSX.Element
}
