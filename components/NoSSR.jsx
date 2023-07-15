import { Fragment } from "react";

export default function NoSSR({ children }) {
  return <Fragment>{children}</Fragment>;
}
