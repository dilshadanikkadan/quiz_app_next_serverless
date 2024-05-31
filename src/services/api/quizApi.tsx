import { deleterequest, getRequest, postRequest } from "@/utils/axios/axios";

export const saveQuiz = async (payload: any) => {
  try {
    const res = await postRequest("/quize/addquiz", payload);
    if (res?.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const saveAnswer = async (payload: any) => {
  try {
    const res = await postRequest("/quize/addquestion", payload);
    if (res?.status === 200) {
      console.log("iam here");

      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getAllQuiz = async () => {
  console.log("hey dilshad ");

  try {
    const res = await getRequest("/quize", {});
    if (res?.status === 200) {
      console.log(res.data);

      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getSingleQuiz = async (id:any) => {
  const quizId = id.queryKey[1]
  try {
    const res = await getRequest(`/quize/${quizId}`, {});
    if (res?.status === 200) {
      console.log(res.data);

      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};


export const updateUserPlayed = async (payload:any) => {
  try {
    const res = await postRequest(`/user/`, payload);
    if (res?.status === 200) {
      console.log(res.data);

      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const userLogin = async (payload:any) => {
  try {
    const res = await postRequest(`/user/login`, payload);
    if (res?.status === 200) {
     
      return{
        success:true,
        payload:res.data
      }
    }
  } catch (error: any) {

     return { errorMsg: error.response.data.message }
  }
};

export const getCurrentuser = async (id:any) => {
  const quizId = id.queryKey[1]
  try {
    const res = await getRequest(`/user/${quizId}`, {});
    if (res?.status === 200) {
      console.log(res.data);

      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const deleteQuiz = async (id:any) => {
  try {
    const res = await deleterequest(`/quize/${id}`);
    if (res?.status === 200) {
      console.log(res.data);

      return res.data;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
