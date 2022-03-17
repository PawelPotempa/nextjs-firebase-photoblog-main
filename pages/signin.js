import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormButton,
  FormText,
} from "../styles/signinElements";
import Link from "next/link";
import Router from "next/router";
import { useRef, useState } from "react";
import { useAuth } from "../src/hooks/AuthContext";
import { auth } from "../src/config/firebase";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser, signout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(auth, emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      Router.push("/blog");
    } catch {
      setLoading(false);
      setError("Nie udało się zalogować");
    }
  }

  async function handleSignout() {
    try {
      await signout();
      setError("");
    } catch {
      setError("Nie udało się wylogować");
    }
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              {!currentUser && <FormH1>Sign in to your account</FormH1>}
              {currentUser && (
                <FormH1>
                  Welcome, {currentUser.email.split("@")[0] + "!"}
                </FormH1>
              )}
              {!currentUser && (
                <FormInput
                  type="email"
                  required
                  placeholder="email"
                  ref={emailRef}
                ></FormInput>
              )}
              {!currentUser && (
                <FormInput
                  type="password"
                  required
                  placeholder="password"
                  ref={passwordRef}
                ></FormInput>
              )}
              {!currentUser && (
                <FormButton type="submit" disabled={loading}>
                  Log In
                </FormButton>
              )}
              {currentUser && (
                <FormButton
                  type="submit"
                  disabled={loading}
                  onClick={handleSignout}
                >
                  Log Out
                </FormButton>
              )}
              {!currentUser && <FormText>Forgot password?</FormText>}
              {error && <FormText>{error}</FormText>}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
