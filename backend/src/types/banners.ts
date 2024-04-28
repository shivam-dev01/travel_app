import { Schema } from "mongoose";

export interface BannerProps {
  header: String;
  subHeader: String;
  destination: Schema.Types.ObjectId;
  topHeader: String;
  ctaPrimary: String;
  ctaSecondary: String;
  file: String;
  fileType: String;
  bannerType: String[];
  isVisible: Boolean;
}
