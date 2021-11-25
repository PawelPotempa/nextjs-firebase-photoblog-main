import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../src/hooks/AuthContext";
import useStorage from "../../src/hooks/useStorage";
import useSlugFetch from "../../src/hooks/useSlugFetch";
import { updatePost } from "../../src/config/firebase";

const Create = () => {
  const router = useRouter();
  const { currentUser, loading } = useAuth();

  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    coverImage: "",
    coverImageAlt: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef();

  const types = ["image/png", "image/jpeg", "image/jpg"];

  // The useEffect code below is responsible for showing the preview of the selected file.
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

  if (loading) {
    return null;
  }

  if (!currentUser && typeof window !== "undefined") {
    router.push("/404");
    return null;
  }

  const { doc } = useSlugFetch(router.query.slug);

  if (!doc) {
    return null;
  }

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setTypeError("");
    } else {
      setFile(null);
      setTypeError("Please select an image file (png or jpg)");
    }
  };

  /*
  This is the function we're passing to each control so we can capture
  the value in it and store it in our `formValues` variable.
  */
  const handleChange = (e) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setFormValues({ ...formValues, [id]: newValue });
  };

  /*
  This function is passed to the <form> and specifies what happens when
  the form is submitted. For now, we're going to log our `formValues`
  to verify that they are being managed correctly.
  
  Side note: we do not need to set an `onClick` for the <button> at the
  end of the form because it has type="submit". This allows us to click
  to submit the form or press the Enter key to submit it.
  */
  const handleSubmit = (e) => {
    // This prevents the default functionality of submitting a form
    e.preventDefault();

    // Check if there are any missing values.
    let missingValues = [];
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value) {
        missingValues.push(key);
      }
    });

    // Alert and prevent the post from being created if there are missing values.
    // if (missingValues.length > 1) {
    //   alert(`You're missing these fields: ${missingValues.join(", ")}`);
    //   return;
    // }

    // Update the isLoading state.
    setIsLoading(true);

    const imageName = typeof file !== "object" ? file.name : null;
    console.log(typeof file);

    // Start the attempt to create a new post.
    updatePost(formValues, file, imageName, doc[0].id)
      .then(() => {
        // Update the isLoading state and navigate to the home page.
        setIsLoading(false);
        alert("Your article has been created");
        router.push(`/post/${formValues.slug}`);
      })
      .catch((err) => {
        // Alert the error and update the isLoading state.
        alert(err);
        setIsLoading(false);
      });
  };

  console.log(doc.id);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create a new post</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            // defaultValue={doc[0].title}
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            type="text"
            // defaultValue={doc[0].slug}
            value={formValues.slug}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            id="coverImage"
            type="file"
            ref={fileInputRef}
            value={formValues.coverImage}
            accept="image/*"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="coverImageAlt">Cover Image Alt</label>
          <input
            id="coverImageAlt"
            type="text"
            value={formValues.coverImageAlt}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={formValues.content}
            onChange={handleChange}
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

export default Create;
