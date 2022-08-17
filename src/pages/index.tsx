import type { NextPage } from "next"
import { useState } from "react"
import Header from "../components/Header"
import ScrollToTopButton from "../components/ScrollToTopButton"
import Spacer from "../components/Spacer"
import Spinner from "../components/Spinner"
import Wrapper from "../components/Wrapper"
import { NextSeo } from "next-seo"

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Wrapper>
      <NextSeo
        title="Show the Local Weather"
        description="freeCodeCamp: Show the Local Weather"
        openGraph={{
          title: "Show the Local Weather",
          description: "freeCodeCamp: Show the Local Weather",
          type: "website",
          site_name: "Show the Local Weather",
        }}
        twitter={{
          handle: "@BRossovsky",
          site: "@BRossovsky",
          cardType: "summary",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />
      <Header title="Show the Local Weather" />
      <Spacer size="0.5rem" />
      <Spinner loading={isLoading} />
      <Spacer size="0.5rem" />
      <Spacer size="2rem" />
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Home
