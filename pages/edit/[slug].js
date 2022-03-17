import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useSlugFetch from "../../src/hooks/useSlugFetch";
import { updatePost } from "../../src/config/firebase";
import { protectedRoute } from "../../src/hooks/useProtectedRoute";
import {
  Wrapper,
  MainForm,
  Title,
  InputWrapper,
  InputWindow,
  InputLabel,
  FileInputWrapper,
  FileInputLabel,
  FileInputWindow,
  TextareaWrapper,
  TextareaWindow,
  SubmitBtn,
  PreviewImage,
} from "../../styles/createElements";

const Edit = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    thumbnail: "",
    thumbnailAlt: "",
    content: "",
  });

  // Fetch document data from Firestore.
  const { doc } = useSlugFetch(router.query.slug);

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

  // Check if doc and it's indeces exist. If not, reset the state of formValues to default.
  // We make sure to reset the state after the component unmounts.
  useEffect(() => {
    if (doc && doc[0] !== undefined) {
      setPreview(doc[0].thumbnail);
      console.log(preview);
      setFormValues({
        title: `${doc[0].title}`,
        slug: `${doc[0].slug}`,
        thumbnail: "",
        thumbnailAlt: `${doc[0].thumbnailAlt}`,
        content: `${doc[0].content}`,
      });
    }
    return () => {
      setFormValues({
        title: "",
        slug: "",
        thumbnail: "",
        thumbnailAlt: "",
        content: "",
      });
    };
  }, [doc]);

  // Failsafe. If doc doesn't get fetched immediately, we return null.
  if (!doc) {
    return null;
  }

  // Handling file input changes.
  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];

    // Checking if file type is contained in [types].
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      alert("Wybierz plik o dozwolonym formacie (png or jpg)");
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
    // This prevents the default functionality of submitting a form
    e.preventDefault();

    // Checks if there are any missing values.
    let missingValues = [];
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value) {
        missingValues.push(key);
      }
    });

    // Alert and prevent the post from being created if there are missing values.
    if (missingValues.length > 1) {
      alert(`Proszę wypełnić następujące pola: ${missingValues.join(", ")}`);
      return;
    }

    // Update the isLoading state.
    setIsLoading(true);

    // If the file doesn't exist, it's of type "null". Since we asynchronously call the current
    // file, we need to make sure the file exists before proceeding.
    const imageName = file !== null ? file.name : null;

    // Attempt to create a new post.
    updatePost(formValues, file, imageName, doc[0].id)
      .then(() => {
        // Update the isLoading state and navigate to the home page.
        setIsLoading(false);
        alert("Post został edytowany");
        router.push(`/post/${formValues.slug}`);
      })
      .catch((err) => {
        // Alert the error and update the isLoading state.
        alert(err);
        setIsLoading(false);
      });
  };

  return (
    <Wrapper>
      <MainForm onSubmit={submitHandler}>
        <Title>Edytuj posta</Title>
        <InputWrapper>
          <InputLabel htmlFor="title">Tytuł</InputLabel>
          <InputWindow
            id="title"
            type="text"
            value={formValues.title}
            onChange={valueChangeHandler}
          />
        </InputWrapper>
        <FileInputWrapper>
          <FileInputLabel htmlFor="thumbnail">Dodaj miniaturę</FileInputLabel>
          <FileInputWindow
            id="thumbnail"
            type="file"
            ref={fileInputRef}
            value={formValues.thumbnail}
            accept="image/*"
            onChange={fileChangeHandler}
          />
        </FileInputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="thumbnailAlt">
            Tekst alternatywny miniatury
          </InputLabel>
          <InputWindow
            id="thumbnailAlt"
            type="text"
            value={formValues.thumbnailAlt}
            onChange={valueChangeHandler}
          />
        </InputWrapper>
        <TextareaWrapper>
          <InputLabel htmlFor="content">Treść</InputLabel>
          <TextareaWindow
            id="content"
            value={formValues.content}
            onChange={valueChangeHandler}
          />
        </TextareaWrapper>
        <SubmitBtn type="submit" disabled={isLoading}>
          {isLoading ? "Edytowanie..." : "Edytuj"}
        </SubmitBtn>
      </MainForm>
      <PreviewImage src={preview} />
    </Wrapper>
  );
};

export default protectedRoute(Edit);
