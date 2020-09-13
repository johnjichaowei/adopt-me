// mostly code from reactjs.org/docs/error-boundaries.html
import React, { ErrorInfo } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends React.Component {
  public state = { hasError: false };

  public static getDerivedStateFromError() {
    setTimeout(() => navigate("/"), 5000);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundar caught an error", error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
