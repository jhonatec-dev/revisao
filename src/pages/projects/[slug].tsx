import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Rafa() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>Aluno: {slug}</title>
      </Head>
      <h1>Aluno: {slug}</h1>
      <Link href="/">Voltar</Link>
    </>
  );
}
