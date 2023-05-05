import { Nunito } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}