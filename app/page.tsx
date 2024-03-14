const path = require("path");
import { Metadata } from "next";
import { BaseSeoContent } from "@/SeoContent/BaseSeoContent";
import AgeByGroupStackedChart from "@/components/Charts/AgeByGroupStackedChart";
import LocationStackedChart from "@/components/Charts/LocationStackedChart";
import QuestionsBarChart from "@/components/Charts/QuestionsBarChart";
import { getData } from "@/uitils/getData";
const { pageTitle, pageDescription, imageUrl, siteUrl } = BaseSeoContent;
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: path.join(process.env.NEXT_PUBLIC_SITE_URL, imageUrl),
    url: siteUrl,
    type: "website",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: path.join(process.env.NEXT_PUBLIC_SITE_URL, imageUrl),
  },
};

export default async function HomePage() {
  const data = await getData({endPoint:"processed"})
  return (
    <section className="bg-[#F0F6F6] min-h-screen p-4 grid grid-cols-1 gap-10 py-10">
      <AgeByGroupStackedChart processedData={data}/>
      <LocationStackedChart processedData={data}/>
      <QuestionsBarChart  processedData={data}/>
    </section>
  );
}
