import "../css/style.css";
import Link from "next/link";

const RegisterForm: React.FC = () => (
  <div className="d-lg-flex half">
    <div
      className="bg order-1 order-md-2"
      style={{ backgroundImage: 'url("/img/bg_1.jpg")' }}
    />
    <div className="contents order-2 order-md-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h3>Register</h3>
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
              <div className="form-group last mb-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Your Password"
                  id="confirmPassword"
                />
              </div>
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0">
                  <span className="caption">Agree to terms and conditions</span>
                  <input type="checkbox" required />
                  <div className="control__indicator" />
                </label>
              </div>
              <input
                type="submit"
                defaultValue="Register"
                className="btn btn-theme w-100"
                value='Register'
              />
              <div className="text-center mt-3">
                <span>Already have an account? <Link href="/login">Log In here</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterForm;
