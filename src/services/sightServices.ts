import { SightModel } from "../models/sights";
import { Sight } from "../types/sights";

const sightService = {
  createSight: async (data: Sight) => {
    try {
      const result = await SightModel.create(data);
      return result;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  },
};

export default sightService;
