import { CldImage } from "next-cloudinary";
const CloudinaryImage = ({ src, alt = "", ...props }) => (
  <CldImage
    // cloudName="dbkiemdqb"
    src={src}
    // secure="true"
    alt={alt}
    {...props}
  />
);

export default CloudinaryImage;
