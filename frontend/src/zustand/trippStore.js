import { create } from "zustand";
import { axiosInstance } from "../api/axiosIntance";
import { apiEndPoints } from "../constants/apiEndPoints";

const trippStore = (set, get) => ({
  banner: [],
  homeBanner: [],
  welcomeBanner: [],
  destination: [],
  chooseBanner: [],
  tripDetails: [],
  allTripDetails: [],
  eBrochureTrip: [],

  getBannerData: async () => {
    try {
      const bannerResult = await axiosInstance.get(apiEndPoints.getBanner);

      if (bannerResult?.data && bannerResult.data?.result?.length) {
        console.log("----length-----");
        set((state) => ({
          banner: bannerResult.data.result,
          homeBanner: bannerResult.data.result.filter((item) =>
            item.bannerType.includes("HOME")
          ),
          welcomeBanner: bannerResult.data.result.filter((item) =>
            item.bannerType.includes("WELCOME")
          ),

          destination: bannerResult.data.result.filter((item) =>
            item.bannerType.includes("DESTINATION")
          ),
          chooseBanner: bannerResult.data.result.filter((item) =>
            item.bannerType.includes("CHOOSE")
          ),
        }));
      }
      return true;
    } catch (error) {
      console.log("-----error----", error?.message);
      throw new Error("Error While fetching data");
    }
  },

  getDestById: (destId) => {
    try {
      let data = get().banner;
      return data?.filter((item, index) => item?._id === destId);
    } catch (error) {
      console.log("--errorDestId--", error?.message);
    }
  },

  getTripByDest: async (destId) => {
    try {
      const result = await axiosInstance.get(
        `${apiEndPoints.getTrippByDest}?destinationId=${destId}`
      );

      if (result.data?.result) {
        set((state) => ({
          tripDetails: result.data?.result,
        }));
      }
    } catch (error) {
      console.log("--errorWhileGetTripp--", error?.message);
      throw new Error("Error While fetching data Trip");
    }
  },

  getTripDetailsById: async (tripId) => {
    try {
      let data = get().tripDetails;
      if (data && data.length) {
        return data?.filter((item) => item._id === tripId);
      }

      data = await axiosInstance.get(
        `${apiEndPoints.getTrippByID}?tripId=${tripId}`
      );

      return [data.data?.result];
    } catch (error) {
      console.log("--ErrorgetTripById--", error?.message);
    }
  },

  getAllTripDetails: async () => {
    try {
      const result = await axiosInstance.get(apiEndPoints.getAllTrip);

      if (result?.data && result.data?.result?.length) {
        set((state) => ({
          allTripDetails: result.data?.result,
          eBrochureTrip: result.data?.result?.filter((item) => !!item.pdfFile),
        }));
      }
    } catch (error) {
      console.log("--errorGetAllTripDetails--", error?.message);
    }
  },
});

const useTrippStore = create(trippStore);

export default useTrippStore;
