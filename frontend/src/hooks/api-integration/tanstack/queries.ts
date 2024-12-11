import { useQuery } from '@tanstack/react-query';
import endpoints from '../../../constants/endpoints.constant';
import {
	userPostsKey,
	usersCountKey,
	usersKey,
} from '../../../constants/keys.constants';
import { IPostResponseData } from '../../../types/api-responses/posts.types';
import {
	IUserCountEndpointResponseData,
	IUserEndpointResponseData,
} from '../../../types/api-responses/users.types';
import { queryFnWrapper } from '../../../utils/api-integration.utils';
import useRequest from '../../useRequest';

export function useGetUsers(page: number) {
	const { get } = useRequest(endpoints.users(page));
	return useQuery<IUserEndpointResponseData>({
		queryKey: usersKey(page),
		queryFn: async () =>
			await queryFnWrapper<IUserEndpointResponseData>(get),
	});
}

export function useGetUsersCount() {
	const { get } = useRequest(endpoints.usersCount);
	return useQuery<IUserCountEndpointResponseData>({
		queryKey: usersCountKey,
		queryFn: async () =>
			await queryFnWrapper<IUserCountEndpointResponseData>(get),
	});
}

export function useGetUserPosts(userId?: string) {
	const { get } = useRequest(endpoints.userPosts(userId || ''));
	return useQuery<IPostResponseData>({
		queryKey: userPostsKey(userId || ''),
		queryFn: async () => await queryFnWrapper<IPostResponseData>(get),
		enabled: !!userId,
	});
}
