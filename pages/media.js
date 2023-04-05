import CustomHeader from "../components/Widgets/CustomHeader/Header";
import { IoFilmOutline, IoPlayCircleOutline } from "react-icons/io5";
import Faq from "../components/PageSections/Faq";
import { useEffect } from "react";
import { makeRequest } from "../apiCalls/requestHandler";
import Head from "next/head";
import MethodType from "../constant/methodType";
import { useRequest } from "../hooks/useRequest";

const MediaContent = () => (
  <div className="mb-[1rem] rounded-[0.5rem] bg-opacity-100 bg-[rgba(255,255,255,var(--tw-bg-opacity))] p-[0.5rem] shadow">
    <div className="relative overflow-hidden w-auto">
      <div className="max-w-[360px] max-h-[360px] mx-auto w-full rounded-[0.5rem] bg-opacity-100 bg-[rgba(248,248,248,var(--tw-bg-opacity))] shadow">
        <img src="https://res.cloudinary.com/gdlapp/image/upload/v1632128592/image/media.PNG.png" />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[rgba(31,26,23,var(--tw-bg-opacity))] bg-opacity-[0.2]">
          <a className="flex cursor-pointer items-center justify-center md:text-[3.75rem] leading-[1] text-opacity-100 text-[rgba(255,255,255,var(--tw-text-opacity))]">
            <IoPlayCircleOutline />
          </a>
        </div>
      </div>
    </div>
    <div className="relative p-[0.75rem]">
      <h2 className="overflow-hidden whitespace-nowrap text-ellipsis text-[1.125rem] leading-[1.75rem] font-[600] capitalize">
        gdl christmas vox pop
      </h2>
      <p className="flex items-center justify-start text-[0.875rem] leading-[1.25rem] text-[rgba(31,26,23,var(--tw-text-opacity))] text-opacity-80">
        We went to the streets of Lagos and asked some great people about
        Christmas, what it means to them and how the year 2020 played out in
        their opinion. Their responses ranged from gratitude to hilarious.
      </p>
    </div>
  </div>
);

const MediaPage = ({ mediaContent, generalContent }) => {
  const { makeRequest, data } = useRequest({
    url: "/pages/resources/mp/all/media",
    method: MethodType.GET,
  });

  const { makeRequest: fetchGeneral, data: generalData } = useRequest({
    url: "/pages/resources/mp/general",
    method: MethodType.GET,
  });

  // useEffect(() => {
  //   fetchGeneral();
  //   makeRequest();
  // }, []);

  useEffect(() => {
    console.log(mediaContent);
  }, [mediaContent]);

  return (
    <div>
      <Head>
        <title>Media | GDL</title>
      </Head>
      <CustomHeader
        name={generalContent.title}
        sub={
          generalContent.description ||
          "A Catalog of our contributions to the Media space!"
        }
        icon={<IoFilmOutline />}
      />
      <div className="-mt-16">
        <div className="container px-4 xl:px-28 mx-auto grid lg:grid-cols-3 gap-6">
          <MediaContent />
        </div>
      </div>
      <section
        id="faq"
        className="container px-4 xl:px-28 mx-auto py-16 md:py-36 w-full"
      >
        <Faq />
      </section>
    </div>
  );
};

export default MediaPage;

export async function getStaticProps() {
  const mediaData = await makeRequest("/pages/resources/mp/all/media");
  const generalData = await makeRequest("/pages/resources/mp/general");
  return {
    props: {
      mediaContent: mediaData.data.data,
      generalContent: generalData.data.data,
    },
  };
}
