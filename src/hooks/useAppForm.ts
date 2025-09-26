import { zodResolver } from "@hookform/resolvers/zod";
import {
	FieldValues,
	useForm,
	UseFormProps,
	UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

function useAppForm<T extends FieldValues>(
	schema: ZodType<T, any>,
	props?: Omit<UseFormProps<T>, "resolver">
): UseFormReturn<T> {
	return useForm<T>({
		mode: props?.mode ?? "onTouched",
		resolver: zodResolver(schema),
		...props,
	});
}

export default useAppForm;
