interface ImageSize {
  width: number;
  height?: number;
}

export const buildImageURI = (
  baseURI: string,
  imageSize?: ImageSize
): string => {
  let ims = imageSize ? `${imageSize.width}x` : `544x`;

  if (imageSize?.height) {
    ims += `${imageSize.height}`;
  }

  const params = new URLSearchParams({ ims }).toString();
  return `${baseURI}?${params}`;
};
