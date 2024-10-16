import Link from "next/link";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="py-8 px-4 mx-auto container-lg">
        <div className="mx-auto text-center" style={{ maxWidth: 576 }}>
          <h1
            className="mb-4 display-1 font-weight-bold" style={{color: '#FE6C32'}}>
            404
          </h1>
          <p className="mb-4 h2 font-weight-bold text-dark">
            Something's missing.
          </p>
          <p className="mb-4 lead">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link href="/" className="btn btn-primary btn-lg my-4" style={{backgroundColor: '#FE6C32'}}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
