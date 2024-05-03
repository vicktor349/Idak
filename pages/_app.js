import { useEffect } from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import Aos from "aos";
import 'aos/dist/aos.css';


const theme = createTheme({
  breakpoints: {
    xs: "20em",
  }
})


export default function App({ Component, pageProps })
{
  useEffect(() =>
  {
    Aos.init({
      offset: 100,
      duration: 1200
    })
  })
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
