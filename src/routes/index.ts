import express from "express";
import facilityRoutes from "./facility";
import sightRoutes from "./sight";

const route = express();

route.use("/facility", facilityRoutes);
route.use("/sight", sightRoutes);

export default route;
