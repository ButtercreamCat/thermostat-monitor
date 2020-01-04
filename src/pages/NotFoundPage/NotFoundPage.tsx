import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <div className="notFound">
      <h1>Page Not Found</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
