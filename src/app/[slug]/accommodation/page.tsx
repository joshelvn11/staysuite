import {
  RootContainer,
  Header,
  PageContent,
  AccommodationCard,
} from "@/components";
import { GetServerSideProps } from "next";
import axios from "axios";
import { get } from "http";

interface Accommodation {
  id: number;
  site: number;
  accommodation_name: string;
  accommodation_slug: string;
  accommodation_type: string;
  accommodation_price_type: number;
  accomodation_price: number;
  accommodation_description: string;
  accommodation_excerpt: string;
}

interface SiteData {
  id: number;
  site_name: string;
  site_slug: string;
  site_subdomain: string;
  site_design: string;
}

async function getAccommodationData(slug: String): Promise<Accommodation[]> {
  try {
    const res = await axios.get(
      process.env.API_URL + "/accommodation/list/?slug=" + slug,
      {
        timeout: 5000,
      }
    );
    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      console.error("Timeout error:", error.message);
      console.error("Error fetching data:", error);
    } else {
      console.error("Error fetching data:", error);
    }
    return [];
  }
}

async function getSiteData(slug: String): Promise<SiteData> {
  try {
    const res = await axios.get(`${process.env.API_URL}/sites/${slug}`, {
      timeout: 5000,
    });
    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      console.error("Timeout error:", error.message);
      console.error("Error fetching data:", error);
    } else {
      console.error("Error fetching data:", error);
    }
    return {
      id: 0,
      site_name: "",
      site_slug: "",
      site_subdomain: "",
      site_design: "",
    };
  }
}

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
