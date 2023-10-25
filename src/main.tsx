import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { router } from "./router";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/styles";
import { FirebaseProvider } from "./firebase/FirebaseProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <FirebaseProvider>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </FirebaseProvider>
    </React.StrictMode>
);
