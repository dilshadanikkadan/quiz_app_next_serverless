import axios from "axios";

export const ImageUplaod = async (image: any) => {
  try {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "application");
    let res;
    if (image) {
      res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqq5x5x6/image/upload",
        data,
        {
          withCredentials: false,
        }
      );
      const { url } = res?.data;
      return url;
    }
  } catch (error) {}
};
