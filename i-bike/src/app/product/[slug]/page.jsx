import ProductDetailComp from "@/components/ProductDetail";
import { auth } from "@/lib/auth/auth";
import { getDataBySlug } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const bike = await getDataBySlug(slug);

  return {
    title: bike.name,
    description: bike.description,
  };
};

export default async function ProductDetailPage({ params }) {
  const { slug } = params;

  const bike = await getDataBySlug(slug);
  const session = await auth();

  console.log(bike, "<----didetailpage");
  return (
    <>
      <section className="py-12 md:px-[40px] lg:px-24">
        <div className="container mx-auto">
          <ProductDetailComp bike={bike} session={session} />
        </div>
      </section>
    </>
  );
}
