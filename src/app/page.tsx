import { ContainerMovieCards } from "@/patterns/ContainerMovieCards";
import "./globals.css";
import productsGet from "@/actions/products-get";
import ClientWrapper from "@/components/ClientWrapper";

export default async function Home() {
  const data = await productsGet();

  return (
    <ClientWrapper>
      <ContainerMovieCards data={data}/>
    </ClientWrapper>
  );
}