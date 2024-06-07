import {
  RootContainer,
  Header,
  PageContent,
  AccommodationCard,
} from "@/components";
import { getSiteData } from "@/api/siteService";
import {
  Accommodation,
  getAccommodationData,
} from "@/api/accommodationService";

export default async function AccommodationListings({
  params,
}: {
  params: { slug: String };
}) {
  const siteData = await getSiteData(params.slug);
  const accommodations = await getAccommodationData(params.slug);

  return (
    <RootContainer>
      <Header title={siteData.site_name} />
      <PageContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {accommodations.map((accommodation: Accommodation) => (
            <AccommodationCard
              key={accommodation.id}
              slug={accommodation.accommodation_slug}
              name={accommodation.accommodation_name}
              price={accommodation.accomodation_price}
              priceType={accommodation.accommodation_price_type}
              excerpt={accommodation.accommodation_excerpt}
            />
          ))}
        </div>
      </PageContent>
    </RootContainer>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await axios.get(
//     "https://127.0.0.1:8000/accommodation/list/?site_id=1"
//   );
//   const accommodations: Accommodation[] = res.data;

//   try {
//     return {
//       props: {
//         accommodations,
//       },
//     };
//   } catch (error) {
//     console.log("Failed to fetch accommodatios", error);
//     return {
//       props: {
//         accommodations: [],
//       },
//     };
//   }
// };
