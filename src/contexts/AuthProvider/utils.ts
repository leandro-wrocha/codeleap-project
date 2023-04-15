import { api } from "@/actions/api";
import { hash, usernameDefault } from "@/constants";

export async function LoginRequest(username: string): Promise<{
	name: string;
	username: string;
} | undefined> {
	try {
		if (username !== usernameDefault) {
			throw new Error('Username invalid');
		}

		return {
			name: 'Leandro Rocha',
			username,
		}
	} catch (error) {
		return undefined;
	}
}

export function setUserLocalStorage(user: { name: string, username: string } ) {
  localStorage.setItem('app.token', hash);

	const userStringfy = JSON.stringify(user);
	localStorage.setItem('app.user', userStringfy);
}
