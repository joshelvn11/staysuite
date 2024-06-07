import axios from "axios";

interface SiteData {
  id: number;
  site_name: string;
  site_slug: string;
  site_subdomain: string;
  site_design: string;
}

export async function getSiteData(slug: String): Promise<SiteData> {
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
