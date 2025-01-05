"use client";

import outputs from "@/amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./app.css";
import { Main } from "./components/Main";

Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      <Main />
    </Authenticator>
  );
}
