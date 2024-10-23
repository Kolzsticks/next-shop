import "../css/style.css";
import Link from "next/link";

const LoginForm: React.FC = () => (
  <div className="d-lg-flex half">
    <div
      className="bg order-1 order-md-2"
      style={{ backgroundImage: 'url("/img/bg_1.jpg")' }}
    />
    <div className="contents order-2 order-md-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h3>Login</h3>
            <form action="#" method="post">
              <div className="form-group first">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="your-email@gmail.com"
                  id="username"
                />
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password"
                  id="password"
                />
              </div>
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0">
                  <span className="caption">Remember me</span>
                  <input type="checkbox" defaultChecked />
                  <div className="control__indicator" />
                </label>
                <span className="ml-auto">
                  <a href="#" className="forgot-pass">
                    Forgot Password
                  </a>
                </span>
              </div>
              <input
                type="submit"
                defaultValue="Log In"
                className="btn btn-theme w-100"
                value="Login"
              />
              <div className="text-center mt-3">
                <span>Don't have an account? <Link href="/register">Register here</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginForm;
