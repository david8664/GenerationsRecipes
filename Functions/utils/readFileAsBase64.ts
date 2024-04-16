export default function readFileAsBase64(file: File): Promise<string> {
  // Create a new FileReader instance
  const reader = new FileReader();
 
  // Return a new Promise that will resolve with the base64 string of the file
  return new Promise((resolve, reject) => {
     // When the file is successfully read, resolve the Promise with the result
     reader.onload = () => resolve(reader.result as string);
 
     // If an error occurs during the file read, reject the Promise with the error
     reader.onerror = reject;
 
     // Begin reading the file as a Data URL (base64 string)
     reader.readAsDataURL(file);
  });
 }