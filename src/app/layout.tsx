import { Open_Sans } from "next/font/google"
import StyledComponentsRegistry from "../../lib/registry";
import { Header } from "@/patterns/Header";
import { GlobalStyle } from "@/styles/global/GlobalStyle";
import { CartContextProvider } from "@/context/cart-context";
import ClientWrapper from "@/components/ClientWrapper";

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Teste Front React WeFit"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <CartContextProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
              <ClientWrapper>
                <Header />
                {children}
              </ClientWrapper>
          </StyledComponentsRegistry>
        </CartContextProvider>
      </body>
    </html>
  );
}
