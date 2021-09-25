import type { NextPage } from 'next'
import DefaultLayout from "../app/common/components/layouts/DefaultLayout";
import ImageStack from "../app/modules/unsplash/components/ImageStack"

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <ImageStack />
    </DefaultLayout>
  )
}

export default Home
