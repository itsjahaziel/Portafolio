import "./../styles/globals.css";
import AOSInit from "./AOSInit";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
