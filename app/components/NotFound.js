import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import NotFoundImage from "../images/404.png";
import NotFoundImageDark from "../images/404-dark.png";

export default function NotFound() {
  return (
    <ThemeConsumer>
      {({theme}) => (
        <div>
          <img src={theme === 'light' ? NotFoundImage : NotFoundImageDark} alt="Page Not Found" className="img-404" />
        </div>
      )}
    </ThemeConsumer>
  );
}
