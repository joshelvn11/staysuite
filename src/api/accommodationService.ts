import axios from "axios";

export interface Accommodation {
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

export async function getAccommodationList(
  slug: String
): Promise<Accommodation[]> {
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

export async function getAccommodationDetail(
  slug: String
): Promise<Accommodation> {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/accommodation/detail/${slug}/`,
      { timeout: 5000 }
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

    return {
      id: 0,
      site: 0,
      accommodation_name: "",
      accommodation_slug: "",
      accommodation_type: "",
      accommodation_price_type: 0,
      accomodation_price: 0,
      accommodation_description: "",
      accommodation_excerpt: "",
    };
  }
}
