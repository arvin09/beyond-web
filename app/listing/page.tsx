
import { Card, ContactForm, Filter } from "@/app/components";
import { villaListing } from "@/app/constants";
export default function listing() {
  return (
    <div>
      <Filter />
      <div className="flex flex-wrap-reverse md:flex-wrap justify-around">
        <div className="w-full md:w-2/3">
          { villaListing.map((villa) => (
            <Card key={villa.id} details={villa} image={`${villa.id}-villa.jpeg`}></Card>
          ))}
        </div>
        {/* Contact us form */}
        <ContactForm />
      </div>
    </div>
  );
}
