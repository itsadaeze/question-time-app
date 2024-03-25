import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CreateQuestionRequest } from "@/app/services/question.request";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const schema = yup.object().shape({
  question: yup
    .string()
    .required("Question is required")
    .min(3, "Question must be greater than 3 letters"),
  optionOne: yup
    .string()
    .required("Option One is required")
    .min(3, "Option One must be greater than 3 letters"),

  optionTwo: yup
    .string()
    .required("Option Two is required")
    .min(3, "Option Two must be greater than 3 letters"),

  optionThree: yup
    .string()
    .required("Option Three is required")
    .min(3, "Option Three must be greater than 3 letters"),
  optionFour: yup.string(),
  optionFive: yup.string(),
});

const AddQuestion = ({ token }) => {
  const [isAdding, setIsAdding] = useState(false);

  // refetch users using Query client from tanStack query logic
  const queryClient = useQueryClient();

  // React Hook form for form validation
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(schema) });

  // Submit handler for the form
  const onSubmitHandler = async (data) => {
    setIsAdding(true);
    const options = [
      data.optionOne,
      data.optionTwo,
      data.optionThree,
      data.optionFour.trim() !== "" ? data.optionFour : null,
      data.optionFive.trim() !== "" ? data.optionFive : null,
    ].filter((option) => option !== null);

    const body = {
      question: data.question,
      options: options,
    };

    try {
      await CreateQuestionRequest(body, token);
      toast.success("Question Added Successfully");
      queryClient.invalidateQueries("getQuestionsApi");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className=" bg-primary text-white dark:bg-accent hover:bg-accent dark:hover:bg-accent dark:text-foreground lg:w-[160px] p-6"
            >
              <div>
                <PlusIcon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              Add Question
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] md:max-w-none md:w-[700px]">
            <DialogHeader>
              <DialogTitle>Add Question</DialogTitle>
              <DialogDescription>
                Kindly Add your favorite question.
              </DialogDescription>
            </DialogHeader>
            <section className="pb-4">
              <form onSubmit={handleSubmit(onSubmitHandler)} className="w-full">
                <section>
                  <div className="my-4 border-b-2 border-accent pb-10">
                    <label htmlFor="" className="font-normal italic">
                      Ask your Question
                    </label>
                    <textarea
                      className="w-full  mt-4 outline-none focus:out-none border-[1.2px]  border-accent-primary rounded-lg p-2 dark:bg-background"
                      name="question"
                      {...register("question")}
                      rows="4"
                      placeholder="Paste / Type your question here"
                    ></textarea>
                    <p className="text-red-500 text-[0.75rem]">
                      {errors.question?.message}
                    </p>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-x-4 pt-2 ">
                    {/* ====Option One ====== */}
                    <div className="max-w-[400px] mb-4">
                      <label htmlFor="" className="font-normal italic">
                        Option One <span className="text-red-800">*</span>
                      </label>
                      <input
                        type="text"
                        name="optionOne"
                        className="w-full  mt-2 outline-none focus:out-none border-[1.2px] border-accent-primary rounded-lg p-2 dark:bg-background"
                        {...register("optionOne")}
                      />
                      <p className="text-red-500 text-[0.75rem]">
                        {errors.optionOne?.message}
                      </p>
                    </div>

                    {/* ====Option Two ====== */}
                    <div className="max-w-[400px] mb-4">
                      <label htmlFor="" className="font-normal italic">
                        Option Two <span className="text-red-800">*</span>
                      </label>
                      <input
                        type="text"
                        name="optionTwo"
                        className="w-full  mt-2 outline-none focus:out-none border-[1.2px] border-accent-primary rounded-lg p-2 dark:bg-background"
                        {...register("optionTwo")}
                      />
                      <p className="text-red-500 text-[0.75rem]">
                        {errors.optionTwo?.message}
                      </p>
                    </div>

                    {/* ====Option Three ====== */}
                    <div className="max-w-[400px] mb-4">
                      <label htmlFor="" className="font-normal italic">
                        Option Three <span className="text-red-800">*</span>
                      </label>
                      <input
                        type="text"
                        name="optionThree"
                        className="w-full  mt-2 outline-none focus:out-none border-[1.2px] border-accent-primary rounded-lg p-2 dark:bg-background"
                        {...register("optionThree")}
                      />
                      <p className="text-red-500 text-[0.75rem]">
                        {errors.optionThree?.message}
                      </p>
                    </div>

                    {/* ====Option Four ====== */}
                    <div className="max-w-[400px] mb-4">
                      <label htmlFor="" className="font-normal italic">
                        Option Four (optional)
                      </label>
                      <input
                        type="text"
                        name="optionThree"
                        className="w-full  mt-2 outline-none focus:out-none border-[1.2px] border-accent-primary rounded-lg p-2 dark:bg-background"
                        {...register("optionFour")}
                      />
                      <p className="text-red-500 text-[0.75rem]">
                        {errors.optionFour?.message}
                      </p>
                    </div>
                  </div>
                  {/* ====Option Five ====== */}
                  <div className="mb-4">
                    <label htmlFor="" className="font-normal italic">
                      Option Five (optional)
                    </label>
                    <input
                      type="text"
                      name="optionFive"
                      className="w-full  mt-2 outline-none focus:out-none border-[1.2px] border-accent-primary rounded-lg p-2 dark:bg-background"
                      {...register("optionFive")}
                    />
                    <p className="text-red-500 text-[0.75rem]">
                      {errors.optionFive?.message}
                    </p>
                  </div>
                </section>

                {/* =========Buttons   (Add button) ======== */}
                <div className="flex gap-10 justify-end mt-1  px-4 md:pr-10 pt-4">
                  <button
                    className="bg-[#000000] dark:bg-primary w-[160px] rounded-xl text-center text-white text-[18px] p-3 cursor-pointer font-bold"
                    disabled={isAdding}
                  >
                    {isAdding ? "Adding..." : "Add"}
                  </button>
                </div>
              </form>
            </section>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddQuestion;
