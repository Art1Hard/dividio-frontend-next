export const profileQueryKey = "user";

export const financeQueryKeys = {
	all: ["finance"] as const,
	incomes: () => [...financeQueryKeys.all, "incomes"] as const,
	statistics: () => [...financeQueryKeys.all, "statistics"] as const,
	allocations: () => [...financeQueryKeys.all, "allocations"] as const,
};
