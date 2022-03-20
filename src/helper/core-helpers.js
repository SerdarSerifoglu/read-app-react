export const formPropertyTypeConverter = (state, prop, newValue) => {
	switch (typeof state[prop]) {
		case "string":
			return newValue;
		case "number":
			return parseFloat(newValue);
		default:
	}
};
