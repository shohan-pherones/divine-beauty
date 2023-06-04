import Image from "next/image";
import React from "react";
const ecoImg =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685546706/divine-beauty/how-to-be-an-eco-friendly-salon-1024x538_2_tovygl.jpg";
const cureltFree =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685549677/divine-beauty/woman-holding-rabbit-cosmetics-test-rabbit-animal-cruelty-free-stop-animal-abuse-concept_247622-26628_t0htyb.jpg";

const formaldehyde =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685600294/divine-beauty/Overhead-Shot-SR-Keratin-Treatment-Web-300x300_pwbvoc.jpg";
const products =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1685600600/divine-beauty/1ce6ae21058eed209402fc9627eb4da7_mqr8j0.jpg";
export const EcoFriendly = () => {
  return (
    <div className="mt-20 wrapper text-[#84817A] ">
      <div className="space-y-5">
        <Image
          priority
          unoptimized
          src={ecoImg}
          loader={() => ecoImg}
          alt={"Eco friendly"}
          height={500}
          width={500}
          className="h-[14rem]   md:w-[28rem] md:object-contain object-cover md:float-right w-full md:ml-10"
        />

        <h1 className="text-5xl text-black">
          WAYS TO BECOME AN ECO-FRIENDLY SALON
        </h1>
        <p className="pb-5 leading-relaxed">
          As consummate hair professionals, we are accustomed to making others
          feel beautiful. But with rising environmental concerns, it is our
          social responsibility to turn our attention to preserving the beauty
          of the world we are living in and becoming an eco-friendly hair salon
          is the first step. Below you’ll find our top 10 tips for going green
          at your salon. And remember, we are always here to assist you in any
          way we can!
        </p>
        <div className="space-y-3 ">
          <h3 className="text-4xl">1. Only Sell and Use Recyclable Products</h3>
          <p className="leading-relaxed">
            Did you know over 16 billion pounds of plastic leak into our ocean
            waters yearly?1 With the world’s population increasing, this number
            is only projected to increase. Plastic in our oceans is something to
            be concerned about not only because of its detrimental effects on
            animal life and vital ecosystems but also on our health.
          </p>
          <p className="h-12  border-l-4 flex items-center ps-5">
            Most plastics, recyclable or not, contain Bisphenol-A (BPA) and
            Phthalates.
          </p>
          <p>
            These materials are known to disrupt the reproductive systems of
            humans, cause congenital disabilities and in some studies even
            cancer and weight gain. However, some plastics are less likely to
            contain both Phthalates and BPA. You can quickly identify them by
            looking at the recycle codes located at the bottom of the
            containers. To become an eco-friendly salon, you should put
            recycling at the top of your list and use only glass salon products
            when you can.
          </p>
        </div>
        <div>
          <Image
            priority
            unoptimized
            src={cureltFree}
            loader={() => cureltFree}
            alt={"cureltFree"}
            height={500}
            width={500}
            className="h-[14rem]   md:w-[20rem] object-cover md:float-left w-full md:mr-10"
          />
          <h3 className="text-3xl">
            2. Offer Products with No Animal-Tested or Animal-Derived
            Ingredients
          </h3>
          <p>
            Over 100 million animals a year die from animal testing and millions
            more are captured and caged for the sole purpose of animal testing.
            Not only is this cruel to animals, but this could also pose
            sustainability concerns in areas of the world where animals are
            captured. Disrupting the balance of nature in the name of animal
            testing is both risky and more expensive than non-animal testing. It
            is best to choose salon products that do not support animal testing,
            such as products endorsed by People for the Ethical Treatment of
            Animals (PETA). For example, Simply Organic Beauty offers
            cruelty-free salon products that are recognized by PETA and has a
            strict company ethos that does not allow them to carry products
            tested on animals.
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl">
            3. Offer Truly Formaldehyde-Free Keratin Treatments
          </h1>
          <Image
            priority
            unoptimized
            src={formaldehyde}
            loader={() => formaldehyde}
            alt={"cureltFree"}
            height={500}
            width={500}
            className="h-[12rem]   md:w-[18rem] object-cover md:float-left w-full md:mr-10"
          />
          <p>
            As salon professionals, we are no strangers to the controversy
            surrounding the popularity of keratin treatments. A lot of companies
            hide behind false claims of being formaldehyde-free, but in
            laboratory tests, many of these companies’ keratin treatments were
            found to have extremely high levels of formaldehyde. Before you fall
            for their false claims, ask for lab reports or request a sample to
            lab test! Formaldehyde is found organically in nature but is a known
            human carcinogen (cancer-causing). Thus, the Environmental
            Protection Agency (EPA) established regulations and limits on the
            emission of formaldehyde from some industrial facilities and
            required them to report the amount of formaldehyde used in their
            products.
          </p>
        </div>
        <div className="space-y-3">
          <Image
            priority
            unoptimized
            src={products}
            loader={() => products}
            alt={"Eco friendly"}
            height={500}
            width={500}
            className="h-[14rem]   md:w-[20rem] object-cover md:float-right w-full md:ml-10"
          />
          <h1 className="text-4xl">
            4. Offer Products with a Negative Carbon Footprint
          </h1>
          <p>
            We understand that for a product to have a truly negative footprint
            is rare, but there are products at the forefront of sustainable
            technology. For example, Oway’s ingredients are grown and picked
            with zero chemicals in their biodynamic farms in Bologna, Italy! The
            packaging itself is 100% infinitely recyclable. They are made with
            eco-certified recycled paper, wood, aluminum tubes and amber glass
            that you can reuse as reed diffusers, candle holders, storage, hand
            soap dispenser and even plant holders.
          </p>
        </div>
        <div className="space-y-3 ">
          <h3 className="text-4xl">
            5. Organize Fun Environment-Saving Adventures with Your Fellow
            Stylists and Clients
          </h3>

          <p className="h-12  border-l-4 flex items-center ps-5">
            Never doubt that a small group of dedicated people can change the
            world!
          </p>
          <p>
            Most salons are closed on Mondays, so take advantage of this to
            create a fun event for salon owners and stylists. You can even
            invite clients to join you in an eco-friendly project once or twice
            a year. Go to a local park or beach and pick up trash! Have a vegan
            baked goods drive to generate income and give some or all profits to
            your favorite environmental organization. Take pictures! Put them on
            your salon website or Facebook, and let current and future clients
            (and the world) know your salon is making a difference. Trust us,
            people will appreciate the good deed and take notice! The
            possibilities are endless for you and your salon to make a
            difference and change salons for the better.
          </p>
        </div>
      </div>
    </div>
  );
};
