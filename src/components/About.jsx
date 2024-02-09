import React, { useEffect } from 'react';

const About = () => {
  useEffect(()=>{
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      {/* Hero Section */}
      
      <section id="client-focus" className="client-focus-section p-12 mt-24 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
          Embark on a Pioneering Journey with a Seasoned Team
          </h2>
          <p className="text-lg">
          Discover a new era of possibilities as we launch a visionary venture,
            supported by a team of seasoned professionals. Our commitment to
            excellence is reflected in the bespoke solutions we provide,
            empowering businesses to thrive in the digital landscape.
          </p>
        </div>
      </section>
      {/* Two-Week Trial Section */}
      <section id="trial" className="trial-section bg-gray-100 p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Experience Excellence with Our Complimentary Two-Week Trial Service
          </h2>
          <p className="text-lg text-gray-700">
            Dive into the realm of unparalleled service with our exclusive
            two-week trial—a testament to our dedication to your success. We
            invite you to explore the potential of our offerings, crafted to
            elevate your brand and surpass expectations.
          </p>
        </div>
      </section>

      {/* Client-Centric Focus Section */}
      <section id="client-focus" className="client-focus-section p-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Client-Centric Focus and Seamless Relationship Building
          </h2>
          <p className="text-lg">
            At the heart of our mission is the art of effective client
            communication and the cultivation of lasting relationships. Our
            unwavering commitment ensures a seamless experience, where your
            vision becomes our shared journey towards triumph.
          </p>
        </div>
      </section>

      {/* E-commerce Expertise Section */}
      <section id="ecommerce" className="ecommerce-section bg-gray-100 p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            Elevating E-commerce Through Expertise
          </h2>
          <p className="text-lg text-gray-700">
            We redefine excellence by maintaining an unparalleled level of
            E-commerce expertise. Staying abreast of industry trends, market
            dynamics, and the latest features on platforms like Amazon, we pave
            the way for your brand's digital ascendancy.
          </p>
        </div>
      </section>

      {/* Analytical Mastery Section */}
      <section
        id="analytical-mastery"
        className="analytical-mastery-section p-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Optimizing Performance Through Analytical Mastery
          </h2>
          <p className="text-lg">
            Unlock the true potential of your online presence through meticulous
            monitoring and optimization. Leveraging cutting-edge analytics
            tools, we refine website performance to enhance visibility and
            drive unprecedented sales.
          </p>
        </div>
      </section>

      {/* SEO/SEM Mastery Section */}
      <section id="seo-sem" className="seo-sem-section bg-gray-100 p-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">
            SEO/SEM Mastery for Strategic Impact
          </h2>
          <p className="text-lg text-gray-700">
            Navigate the ever-evolving landscape of SEO/SEM with confidence. Our
            strategies are not just adaptive but anticipatory, aligning with the
            best practices and algorithms to ensure your brand remains at the
            forefront of digital discovery.
          </p>
        </div>
      </section>

      {/* Market Mastery Section */}
      <section id="market-mastery" className="market-mastery-section p-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Market Mastery Through Research and Analysis
          </h2>
          <p className="text-lg">
            Our commitment to success extends beyond innovation—it's rooted in
            continuous market research and comprehensive competitor analysis.
            This meticulous approach allows us to fine-tune our strategies,
            ensuring sustained success on the dynamic Amazon platform.
          </p>
        </div>
      </section>

      {/* Add your Footer Section if needed */}
    </div>
  );
};

export default About;
