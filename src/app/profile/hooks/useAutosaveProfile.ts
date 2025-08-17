// import { TypeUserFormState } from "@/types/user.types";
// import { debounce } from "lodash";
// import useUpdateProfile from "./useUpdateProfile";
// import { useEffect, useRef } from "react";

// const useAutosaveProfile = (
// 	watchedValues: TypeUserFormState,
// 	isDirty: boolean
// ) => {
// 	const { updateProfile } = useUpdateProfile();
// 	const lastSaved = useRef<string>("");

// 	// Создаем дебаунс один раз
// 	const debouncedSave = debounce((data: TypeUserFormState) => {
// 		const payload = { ...data };
// 		if (!payload.password) delete payload.password;
// 		updateProfile(payload);
// 		console.log("Профиль обновлен!");
// 	}, 1000);

// 	useEffect(() => {
// 		const serialized = JSON.stringify(watchedValues);
// 		if (serialized === lastSaved.current || !isDirty) return;

// 		lastSaved.current = serialized;
// 		debouncedSave(watchedValues);

// 		return () => debouncedSave.cancel();
// 	}, [watchedValues]);
// };

// export default useAutosaveProfile;
