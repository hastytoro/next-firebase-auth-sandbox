import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Authy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-2xl font-medium">Landing page</h1>
        <h2 className="text-2xl py-2">Upgrade your security</h2>
        <h3>
          Universal login is the most secure, standards-based strategy when
          authenticating with a provider.
        </h3>
      </main>
    </div>
  );
}
