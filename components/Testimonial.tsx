import React from "react";

const Testimonial = () => {
  return (
    <section
      id="quote"
      className="relative z-10 flex flex-none flex-shrink-0 items-center p-4"
    >
      <div className="relative z-10 container mx-auto testimonials-carousel pt-12 lg:pt-20 pb-12 lg:pb-20">
        <div className="flex h-full my-auto">
          <div className="max-w-5xl flex flex-col gap-4 justify-center text-center mx-auto items-center">
            <h3 className="heading-medium font-dancing-script text-xl md:text-3xl">
              GoaBeyond made our vacation unforgettable! The villa was stunning
              and the staff was amazing. They went above and beyond to make sure
              we had everything we needed. Thank you for an amazing experience!
            </h3>
            <p className="body-large font-quicksand text-xl">- Arvin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
