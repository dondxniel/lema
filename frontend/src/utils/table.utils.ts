/**
 * Filters objects in an array to only include specified fields.
 * @param {string[]} fields - Array of field names to include.
 * @param {object[]} data - Array of objects to filter.
 * @returns {object[]} Filtered array of objects.
 */
export function filterFields(
	fields?: string[],
	data?: Record<string, string>[]
) {
	if (!fields || !data) return [];
	return data.map((item) => {
		return fields.reduce((acc: Record<string, string>, field) => {
			if (Object.prototype.hasOwnProperty.call(item, field)) {
				acc[field] = item[field];
			}
			return acc;
		}, {});
	});
}
