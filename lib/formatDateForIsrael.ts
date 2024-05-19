/**
 * Formats a given date string into a specific format suitable for Israel.
 * @param dateString - The date string to format.
 * @param includeTime - Optional. If true, includes the hour, minute, and second in the formatted string. Default is true.
 * @returns The formatted date string.
 */
const formatDateForIsrael = (
  dateString: string,
  includeTime: boolean = true
): string => {
  // Validate the date string
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string provided.");
  }

  // Define the base options for formatting
  const baseOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Conditionally add time options based on includeTime flag
  const options: Intl.DateTimeFormatOptions = includeTime
    ? {
        ...baseOptions,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }
    : baseOptions;

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("he-IL", options).format(date);
  return formattedDate;
};

export default formatDateForIsrael;
