import { Schema } from "mongoose";

export interface TripDetailsProps {
  destination: Schema.Types.ObjectId;
  images: String[];
  title: String;
  descprition: String;
  days: String;
  nights: String;
  transport: Boolean;
  breakFast: Boolean;
  hotel: Boolean;
  sightSeeing: Boolean;
  ctaPrimary: String;
  policyDetails: Schema.Types.ObjectId;
  amount: Number;
  person: Number;
  discount: Number;
  amountAfterDiscount: Number;
  header: String;
  subHeader: String;
  ctaSecondary: String;
  pdfFile: String;
}
