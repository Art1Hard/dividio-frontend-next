export const getFirstLetter = (name: string) => {
	for (const char of name) {
		if (/[A-Za-zА-Яа-яЁё]/.test(char)) {
			return char.toUpperCase();
		}
	}
	return "U";
};
