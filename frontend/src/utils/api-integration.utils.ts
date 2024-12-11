import { AxiosError, AxiosHeaders, HttpStatusCode } from 'axios';
import { toast } from 'sonner';
import axiosInstanceConstant from '../constants/axiosInstance.constant';
import {
	MakeRequestInterface,
	ResponseInterface,
	TCustomError,
} from '../types/api-integration.types';

export async function queryFnWrapper<T>(
	fn: () => Promise<ResponseInterface>
): Promise<T> {
	const res = await fn();
	if (!res?.success) throw Error(res.message);
	return res.data;
}

export function apiRes(success: boolean, message: string, data: any) {
	return {
		success,
		message,
		data,
	};
}

export async function handleErrors(errorMessage: string, showError: boolean) {
	if (!errorMessage) errorMessage = 'Unknown error.';

	if (showError) toast.error(errorMessage);

	return apiRes(false, errorMessage, null);
}

export const makeRequest = async ({
	method,
	params,
	defaultUrl = '',
}: MakeRequestInterface): Promise<ResponseInterface> => {
	const resolvedUrl = params?.url ? params?.url : defaultUrl;
	const headers = (params?.headers || undefined) as AxiosHeaders;
	try {
		let response = await axiosInstanceConstant({
			method,
			url: `${resolvedUrl}`,
			data: params.data,
			headers,
		});

		const msg: string = response?.data?.message || 'Success';

		if (
			response.status >= HttpStatusCode.Ok &&
			response.status <= HttpStatusCode.ImUsed
		) {
			return apiRes(true, msg, response.data?.data);
		}
		return await handleErrors(
			response?.data?.message,
			params.showError || true
		);
	} catch (e: unknown) {
		return await handleErrors(
			(e as TCustomError)?.response?.data?.message ||
				(e as TCustomError)?.response?.message ||
				(e as AxiosError)?.message,
			params.showError || true
		);
	}
};
