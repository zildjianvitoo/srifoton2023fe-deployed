import { Fragment } from "react";
import dynamic from "next/dynamic";

function NoSSR({ children }) {
  return <Fragment>{children}</Fragment>;
}

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
