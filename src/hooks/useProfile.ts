import { profileQueryKey } from "@/constants/query-keys.constants";
import userService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

const useProfile = () => {
	const {
		data: profile,
		isLoading,
		isError,
		isSuccess,
	} = useQuery({
		queryKey: [profileQueryKey],
		queryFn: () => userService.getProfile(),
		retry: (failureCount, error: any) => {
			if (error?.response?.status === 401) return false;
			return failureCount < 2;
		},
	});

	return { profile, states: { isLoading, isError, isSuccess } };
};

export default useProfile;
