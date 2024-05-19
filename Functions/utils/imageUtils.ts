// This function checks if an image exists at a given URL.
const checkImageExists = async (url: string): Promise<boolean> => {
  try {
    // Create an AbortController to allow aborting the fetch request if needed.
    const controller = new AbortController();
    const signal = controller.signal;

    // Set a timeout to abort the fetch request after  5 seconds if it hasn't completed.
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    // Send a fetch request to the provided URL with the signal to allow for aborting.
    const response = await fetch(url, { signal });

    // Clear the timeout since the fetch request has completed successfully.
    clearTimeout(timeoutId);

    // Check if the response is OK (status code in the range  200-299).
    if (!response.ok) {
      // If the response is not OK, throw an error with the HTTP status code.
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Retrieve the Content-Type header from the response.
    const contentType = response.headers.get("content-type");

    // Check if the Content-Type header indicates an image.
    if (!contentType || !contentType.startsWith("image/")) {
      // If the Content-Type is not an image, throw an error.
      throw new Error("Not an image");
    }

    // If all checks pass, return true to indicate that the image exists.
    return true;
  } catch (error) {
    // Return false to indicate that the image does not exist or there was an error.
    return false;
  }
};
export default checkImageExists;
