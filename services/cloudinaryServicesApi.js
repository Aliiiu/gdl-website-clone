import cloudinaryApi from "../utils/cloudinaryApi";

const cloudinaryServiceApi = {
  uploadImage: async data => {
    return cloudinaryApi().post("", data);
  },
};

export default cloudinaryServiceApi;
