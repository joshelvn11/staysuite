import {
  RootContainer,
  Header,
  PageContent,
  AccommodationGallery,
} from "@/components";
import { getSiteData } from "@/api/siteService";
import { getAccommodationDetail } from "@/api/accommodationService";
import { getPriceTypeText } from "@/utils/currencyUtils";

export default async function AccommodationDetail({
  params,
}: {
  params: { slug: string; accomSlug: String };
}) {
  // Get site detail data from server
  const siteData = await getSiteData(params.slug);
  // Get accommodation detail data from server
  const accomData = await getAccommodationDetail(params.accomSlug);

  return (
    <RootContainer>
      <Header title={siteData.site_name} />
      <PageContent>
        <div className="flex justify-start w-full">
          <h2 className="text-2xl font-semibold">
            {accomData.accommodation_name}
          </h2>
        </div>
        <AccommodationGallery
          gallery={
            typeof accomData.accommodation_gallery === "string"
              ? JSON.parse(accomData.accommodation_gallery)
              : accomData.accommodation_gallery
          }
        ></AccommodationGallery>
      </PageContent>
    </RootContainer>
  );
}
