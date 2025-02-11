import SectionContent from "./SectionContent";
import ServiceItem from "./ServiceItem";
import SideMark from "./SideMark";

const serviceItems = [
  {
    key: 1,
    title: '1. Web App Development',
    description: 'Build a professional, high-converting website to showcase your brand',
    imageSrc: '/service-1.png',
    keywords: ['color', 'design', 'typography', 'wireframe']
  },
  {
    key: 2,
    title: '2. Mobile App Development',
    description: 'Engage customers with user-friendly mobile applications.',
    imageSrc: '/service-2.png',
    keywords: ['color', 'design', 'typography', 'wireframe']
  },
  {
    key: 3,
    title: '3. Social Media Expert',
    description: 'Boost your online visibility with strategic social media management.',
    imageSrc: '/service-3.png',
    keywords: ['color', 'design', 'typography', 'wireframe']
  },
  {
    key: 4,
    title: '4. Digital Advertising',
    description: 'Engage customers with user-friendly mobile applications.',
    imageSrc: '/service-4.png',
    keywords: ['color', 'design', 'typography', 'wireframe']
  },
  {
    key: 5,
    title: '5. Business Management Digitalization',
    description: 'Optimize processes and improve efficiency with smart digital tools.',
    imageSrc: '/bg-services.png',
    keywords: ['color', 'design', 'typography', 'wireframe']
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-3 py-8 md:px-12 md:py-16 text-white bg-center bg-cover h-auto"
      style={{ backgroundImage: "url('/bg-services.png')"}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      <div className="absolute inset-0 h-2/3 bg-gradient-to-b from-black to-transparent" />
      <SideMark>SERVICES</SideMark>
      <div className="relative z-10">
        <SectionContent
          title="We offer several services">
          So, how can a small local business like a plumber, gardener, or other tradesperson follow the same path as these global giants? Start by creating a strong online presence—a professional, user-friendly website is essential. Add a Google My Business listing to ensure you appear in local searches. Use platforms like Facebook and Instagram to share before-and-after photos of your work, customer testimonials, and engaging videos. Consistent, hyper-local advertising campaigns can help you target your community effectively, bringing in steady leads and building trust. Similarly, small retail businesses like coffee shops, pizzerias, and restaurants can harness digital marketing by focusing on visually appealing content. Share mouthwatering photos on Instagram, leverage TikTok trends to showcase your personality, and encourage customers to leave reviews online. Add online ordering and delivery options to your website and utilize targeted ads to drive traffic during peak hours. These simple yet impactful strategies can help you connect with more customers, grow your brand, and scale your sales beyond expectations.
        </SectionContent>
        <div className="flex flex-col flex-wrap md:flex-row px-4">
          {serviceItems.map((item) => (
            <ServiceItem
              key={item.key}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              keywords={item.keywords}
              className="w-full md:w-1/2"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
