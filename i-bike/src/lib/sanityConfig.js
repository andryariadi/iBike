import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "3tk6leby",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

const imgBiulder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  return imgBiulder.image(source);
};
