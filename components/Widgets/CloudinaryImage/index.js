import { CldImage } from "next-cloudinary";
const CloudinaryImage = ({ src, alt = "", ...props }) => (
  <CldImage src={src} alt={alt} {...props} />
);

export default CloudinaryImage;
