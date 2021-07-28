import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  selectCustomUserErrorMessage,
  selectUserLoading,
} from "../../redux/User/userSelectors";
import { clearUserAction, userLoginAction } from "../../redux/User/userSlice";
import { loginFormSchema } from "../../validation";
import { LoginForm } from "../../validation/types";
import InputField from "../forms/InputField";

const Login = () => {
  const errorMessage = useSelector(selectCustomUserErrorMessage);
  const isLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();
  const history = useHistory();

  const navigateRegister = () => {
    dispatch(clearUserAction());
    history.push("/register");
  };

  const submitLogin = (values: LoginForm) => {
    dispatch(userLoginAction(values));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginFormSchema}
      onSubmit={(values) => submitLogin(values)}
    >
      {() => (
        <div>
          <div id="particles-js" className=""></div>
          <div className="page">
            <div className="page-single">
              <div className="container">
                <div className="row">
                  <div className="col col-login mx-auto">
                    <div className="text-center mb-6 ">
                      <img src="" className="h-6" alt=""></img>
                    </div>
                    {isLoading ? (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <ClipLoader size={180} color="purple" />
                      </div>
                    ) : (
                      <Form className="card">
                        <div className="card-body p-6">
                          <div className="card-title text-center">
                            Login to your Account
                          </div>
                          <InputField
                            label="Email"
                            name="email"
                            placeholder="Enter email"
                            type="email"
                          />
                          <InputField
                            label="Password"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                          />
                          {errorMessage ? (
                            <div>
                              <span className="form-error-major">{`${errorMessage}`}</span>
                            </div>
                          ) : null}
                          <div className="form-footer">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Sign In
                            </button>
                          </div>
                          <div className="text-center text-muted mt-3">
                            Don't have account yet?{" "}
                            <a href="#" onClick={navigateRegister}>
                              Create Account{" "}
                            </a>
                          </div>
                        </div>
                      </Form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
