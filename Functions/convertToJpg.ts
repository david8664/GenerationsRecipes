function convertToJpg(inputImage: string, quality?: number): Promise<string> {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.src = inputImage;

  return new Promise<string>((resolve, reject) => {
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const dataUrl = canvas.toDataURL("image/jpeg", quality || 1.0);
      resolve(dataUrl);
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
}
