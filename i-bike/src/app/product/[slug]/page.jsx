import { getDataBySlug } from "@/lib/data";
import { Bike, Clock, PackageCheck, RefreshCw, ChevronLeft } from "lucide-react";

export default async function ProductDetail({ params }) {
  const { slug } = params;

  const bike = await getDataBySlug(slug);

  console.log(bike, "<----didetailpage");
  return (
    <>
      <div>Product Detail</div>
    </>
  );
}
