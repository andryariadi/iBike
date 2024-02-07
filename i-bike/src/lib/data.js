import { client } from "./sanityConfig";

export const getData = async () => {
  const query = `*[_type == "product" && references(*[_type == "category" && name == "popular"]._id, categories)] {
      _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[] -> {
        name
        }
    }`;

  const data = await client.fetch(query);
  return data;
};
