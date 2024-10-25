import Link from "next/link";
import '../../css/bootstrap.css'

export default function OfflinePage() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h1 className="display-4 text-danger">You're Offline</h1>
        <p className="lead">
          It seems you're not connected to the internet. Please check your
          connection and try again.
        </p>
        <Link href="/" className="btn btn-primary btn-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
