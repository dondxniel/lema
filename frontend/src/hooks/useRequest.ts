import { RequestParams, UseRequestArg } from '../types/api-integration.types';

import { makeRequest } from '../utils/api-integration.utils';

export default function useRequest(arg: UseRequestArg = '') {
	const defaultUrl = typeof arg === 'string' ? arg : arg.url;

	return {
		post: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'POST',
				params,
				defaultUrl,
			}),
		get: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'GET',
				params,
				defaultUrl,
			}),
		patch: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'PATCH',
				params,
				defaultUrl,
			}),
		put: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'PUT',
				params,
				defaultUrl,
			}),
		deleteReq: (params: RequestParams | {} = {}) =>
			makeRequest({
				method: 'DELETE',
				params,
				defaultUrl,
			}),
	};
}
