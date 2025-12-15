import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Not Found</h1>
      <p className="text-neutral-300">That page doesn’t exist.</p>
      <Link className="text-growth-300 hover:underline" to="/">
        Go home →
      </Link>
    </div>
  );
}
