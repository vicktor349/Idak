import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps })
{
  return (
    <div className="max-w-[1787px]">
      <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </div>
  )
}
