import { paginationPageSize } from './config';

const endpoints = {
	users: (page: number) =>
		`/users?pageNumber=${page}&pageSize=${paginationPageSize}`,
	usersCount: '/users/count',
	userPosts: (userId: string) => `/posts?userId=${userId}`,
	deletePost: (id: string) => `/posts?postId=${id}`,
	createPost: `/posts`,
};

export default endpoints;
