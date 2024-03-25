import axios from "axios";

// GET(READ) ALL QUESTIONS REQUEST
export const GetQuestionsRequest = async (token) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/questions`,
    {
      maxBodyLength: Infinity,
      headers: {
        Accept: "application/vnd.connect.v1+json",
        Token: `${token}`,
      },
    }
  );
  const data = await response.data;
  return data;
};

// CREATE NEW QUESTION REQUEST
export const CreateQuestionRequest = async (body, token) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/questions`,
      body,
      {
        headers: {
          Token: `${token}`,
          Host: "qt.organogram.app",
          "Content-Type": "application/json",
          "Content-Length": 193,
        },
      }
    );
    const data = response.data;
    console.log(data, "data is here");
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// EDIT QUESTION REQUEST
export const EditQuestionRequest = async (token, questionID, body) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BASEURL}/questions/${questionID}`,
      body,
      {
        headers: {
          Token: `${token}`,
          Host: "qt.organogram.app",
          "Content-Type": "application/json",
          "Content-Length": 197,
        },
      }
    );
    const data = response.data;
    console.log(data);
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE QUESTION  REQUEST
export const DeleteQuestionRequest = async (token, questionID) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASEURL}/questions/${questionID}`,
    {
      maxBodyLength: Infinity,
      headers: {
        Token: `${token}`,
        Host: "qt.organogram.app",
      },
    }
  );
  const data = await response.data;
  return data;
};
