"use client";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  DeleteQuestionRequest,
  GetQuestionsRequest,
} from "@/app/services/question.request";
import AddQuestion from "./AddQuestion";
import { Button } from "@/components/ui/button";
import EditQuestion from "./EditQuestion";

const Question = ({ token }) => {
  const { data: questionsData } = useQuery({
    queryKey: ["getQuestionsApi"],
    queryFn: () => GetQuestionsRequest(token),
  });
  const queryClient = useQueryClient();

  // Calculate the length of the data
  const dataLength = questionsData ? Object.keys(questionsData).length : 0;

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const handleDeleteQuestion = async (questionID) => {
    try {
      await DeleteQuestionRequest(token, questionID);
      toast.success("Question deleted Successfully");
      queryClient.invalidateQueries("getQuestionsApi");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="text-black w-full min-h-screen md:p-4">
        <div className="px-2 md:px-6 py-4 border-b border-accent">
          <div className="md:flex w-full justify-between items-center">
            <div className="flex gap-3 mb-2 md:mb-0 md:space-x-4 items-center ">
              <p className="text-gray-600 text-[26px] font-semibold">
                Questions
              </p>
              <p className="p-[14px] rounded-[4px] bg-gray-50">
                ({dataLength})
              </p>
            </div>
            <div>
              <AddQuestion token={token} />
            </div>
          </div>
        </div>

        <div className="mt-10 border-[1.3px] border-accent h-[600px] overflow-auto">
          {questionsData &&
            Object.entries(questionsData).map(
              ([questionId, questionData], index) => (
                <div
                  key={questionId}
                  className="border-[1.5px] border-accent hover:bg-accent mb-4 p-4 text-white"
                >
                  <div className="md:flex justify-between gap-x-4">
                    <p className="font-semibold text-primary line-clamp-2">
                      <span className="mr-2">{index + 1}.</span>
                      {questionData.question}
                    </p>
                    <div className="hidden gap-x-2 md:flex ">
                      <EditQuestion
                        token={token}
                        questionID={questionId}
                        questionsData={questionsData}
                      />
                      <Button
                        variant="destructive"
                        className=""
                        onClick={() => handleDeleteQuestion(questionId)}
                      >
                        Delete Question
                      </Button>
                    </div>
                  </div>
                  <ul className="text-foreground">
                    {questionData.options.map((option, index) => (
                      <li key={index}>
                        <span className="mr-2">{alphabet[index]}.</span>
                        {option}
                      </li>
                    ))}
                  </ul>
                  <div className="gap-x-2 flex  mt-6 md:hidden ">
                    <EditQuestion
                      token={token}
                      questionID={questionId}
                      questionsData={questionsData}
                    />
                    <Button
                      variant="destructive"
                      className=""
                      onClick={() => handleDeleteQuestion(questionId)}
                    >
                      Delete Question
                    </Button>
                  </div>
                </div>
              )
            )}
          {dataLength === 0 && (
            <div className="text-foreground text-center flex items-center justify-center pt-40">
              No Question available, Kindly Add questions{" "}
              <span className="text-[42px] ml-2">👆</span>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Question;
