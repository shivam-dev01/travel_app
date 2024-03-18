import { FacilityModel } from "../models/facilities";
import { Facility } from "../types/facilities";

const facilityService = {
  createFacility: async (data: Facility) => {
    try {
      const Result = await FacilityModel.create(data);
      return Result;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  },
  getAllFacilities: async () => {
    try {
    } catch (error) {}
  },
  getOneFacility: async () => {
    try {
    } catch (error) {}
  },
  updateFacility: async () => {
    try {
    } catch (error) {}
  },
  deleteFacility: async () => {
    try {
    } catch (error) {}
  },
};

export default facilityService;
