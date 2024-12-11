import { connection } from "../connection";
import {
	createPostTemplate,
	deletePostTemplate,
	selectPostsTemplate,
} from './query-tamplates';
import { PostResponse } from './types';

export const getPosts = (userId: string): Promise<PostResponse> =>
	new Promise((resolve, reject) => {
		connection.get(
			selectPostsTemplate,
			[userId],
			(error, result: PostResponse) => {
				if (error) reject(error);

				const newResult = {
					user:
						typeof result?.user === 'string'
							? JSON.parse(result?.user)
							: result?.user,
					posts:
						typeof result?.posts === 'string'
							? JSON.parse(result?.posts)
							: result?.posts,
				};

				resolve(newResult as PostResponse);
			}
		);
	});

export const deletePost = (postId: string) =>
	new Promise((resolve, reject) => {
		connection.run(
			deletePostTemplate,
			[postId],
			(error: unknown, result: unknown) => {
				if (error) reject(error);
				resolve(result);
			}
		);
	});

export const createPost = (
	userId: string,
	postTitle: string,
	postBody: string
) =>
	new Promise((resolve, reject) => {
		connection.run(
			createPostTemplate,
			[userId, postTitle, postBody],
			(error: unknown, result: unknown) => {
				if (error) reject(error);
				console.log(result);

				resolve(result);
			}
		);
	});