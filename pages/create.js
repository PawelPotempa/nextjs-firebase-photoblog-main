import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { protectedRoute } from "../src/hooks/useProtectedRoute";
import { createPost } from "../src/config/firebase";

const Create = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    thumbnail: "",
    thumbnailAlt: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef();

  // File types allowed for the thumbnail.
  const types = ["image/png", "image/jpeg", "image/jpg"];

  // Showing the preview of the selected file.
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  // Handling file input changes.
  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];

    // Checking if file type is contained in [types].
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      alert("Please select an image file (png or jpg)");
    }
  };

  // Function passed to every input window in order to capture its value.
  const valueChangeHandler = (e) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setFormValues({ ...formValues, [id]: newValue });
  };

  // Function responsible for handling the form submition.
  const submitHandler = (e) => {
    // This prevents the default functionality of submitting a form.
    e.preventDefault();

    // Checks if there are any missing values.
    let missingValues = [];
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value) {
        missingValues.push(key);
      }
    });

    // Alert and prevent the post from being created if there are missing values.
    if (missingValues.length > 1 || file === null) {
      alert(`You're missing these fields: ${missingValues.join(", ")}`);
      return;
    }

    // Update the isLoading state.
    setIsLoading(true);

    const imageName = file.name;

    // Attempt to create a new post.
    createPost(formValues, file, imageName)
      .then(() => {
        // Update the isLoading state and navigate to the home page.
        setIsLoading(false);
        alert("Your article has been created");
        router.push("/blog");
      })
      .catch((err) => {
        // Alert the error and update the isLoading state.
        alert(err);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Create a new post</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={formValues.title}
            onChange={valueChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            type="text"
            value={formValues.slug}
            onChange={valueChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            id="coverImage"
            type="file"
            ref={fileInputRef}
            value={formValues.thumbnail}
            accept="image/*"
            onChange={fileChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="coverImageAlt">Cover Image Alt</label>
          <input
            id="coverImageAlt"
            type="text"
            value={formValues.thumbnailAlt}
            onChange={valueChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formValues.content}
            onChange={valueChangeHandler}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
      <img src={preview} />
    </div>
  );
};

export default protectedRoute(Create);
