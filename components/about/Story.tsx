import { Card, CardContent } from "@/components/ui/card";

export default function Story() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
            <div className="space-y-6">
              <p className="text-black">
                Founded in 2008, Golden Harvest Cashews Ltd. began as a small
                family-owned farm in the lush landscapes of Ghana's Bono Region.
                Our founders, driven by a passion for sustainable agriculture
                and a vision of empowering local communities, set out to
                cultivate the finest organic cashews.
              </p>
              <p>
                Over the years, we've grown from a modest operation to a leading
                producer of premium organic cashew nuts, all while maintaining
                our commitment to quality, sustainability, and fair trade
                practices. Our journey has been one of continuous learning,
                innovation, and dedication to our core values.
              </p>
              <p>
                Today, Golden Harvest Cashews is proud to be at the forefront of
                the organic cashew industry, supplying high-quality nuts to
                markets across Ghana, West Africa, Europe, and North America.
                Our success is a testament to the hard work of our farmers, the
                support of our local community, and the loyalty of our customers
                who share our passion for exceptional, ethically-produced
                cashews.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
