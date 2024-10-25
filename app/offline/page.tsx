import Link from "next/link";

export default function OfflinePage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>You're Offline</h1>
      <p>
        It seems you're not connected to the internet. Please check your
        connection and try again.
      </p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
