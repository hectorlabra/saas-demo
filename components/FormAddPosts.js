"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const FormAddPosts = ({ boardId }) => {
  const router = useRouter();
  const [postContent, setPostContent] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      await axios.post(`/api/post?boardId=${boardId}`, {
        content: postContent,
        description,
      });
      setPostContent("");
      setDescription("");
      toast.success("Post added successfully!");
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
      <p className="font-bold text-lg">Suggest a feature</p>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Short, descriptive title</legend>
        <textarea
          required
          className="input w-full min-h-[80px]"
          placeholder="Green button plz..."
          value={postContent}
          onChange={(event) => setPostContent(event.target.value)}
          maxLength={100}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Description</legend>
        <textarea
          className="textarea h-24 w-full"
          placeholder="The log button color should be green "
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={1000}
        />
      </fieldset>

      <button
        className="btn btn-primary w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <span className="loading"></span>}
        Add Post
      </button>
    </form>
  );
};

export default FormAddPosts;
