"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const router = useRouter();
  const [boardName, setBoardName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.post("/api/board", { name: boardName });

      setBoardName("");
      toast.success("Board created successfully!");

      router.refresh();
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Create a new feedbackboard</p>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Board name</legend>
        <input
          required
          type="text"
          className="input w-full"
          placeholder="Future Unicorn Inc. 🦄"
          value={boardName}
          onChange={(event) => setBoardName(event.target.value)}
        />
      </fieldset>
      <button className="btn btn-primary w-full" type="submit">
        {isLoading && <span className="loading"></span>}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
