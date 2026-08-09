"use client";

import dynamic from "next/dynamic";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import config from "../../../../sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "100%",
          fontFamily: "system-ui, sans-serif",
          color: "#141814",
        }}
      >
        Loading Studio…
      </div>
    ),
  },
);

function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  return true;
}

export default function StudioPage() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp} enableVendorPrefixes>
      <NextStudio config={config} />
    </StyleSheetManager>
  );
}
