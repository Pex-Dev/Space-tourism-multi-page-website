import Header from "../Header";
import Background from "./Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Header />
      {children}
    </>
  );
}
