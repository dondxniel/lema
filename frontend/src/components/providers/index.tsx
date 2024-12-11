import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { IProviderProps } from '../../types/providers.types';

const queryClient = new QueryClient();

export default function RootProvider({ children }: IProviderProps) {
	return (
		<MantineProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
			<Toaster />
		</MantineProvider>
	);
}
