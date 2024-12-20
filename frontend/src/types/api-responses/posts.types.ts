import { IUser } from './users.types';

export interface IPost {
	id: string;
	user_id: string;
	title: string;
	body: string;
	created_at: string;
}

export interface IPostResponseData {
	user: IUser;
	posts: IPost[];
}
