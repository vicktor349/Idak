import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  breakpoints: {
    xs: "20em",
  }
})


export default function App({ Component, pageProps })
{
  return (
    <div className="max-w-[1787px]">
      <MantineProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </div>
  )
}
