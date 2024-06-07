import {
  RootContainer,
  Header,
  PageContent,
  AccommodationCard,
} from "@/components";
import { getSiteData } from "@/api/siteService";

export default async function ClientSite({
  params,
}: {
  params: { slug: string };
}) {
  const siteData = await getSiteData(params.slug);
  return (
    <RootContainer>
      <Header title={siteData.site_name} />
    </RootContainer>
  );
}
