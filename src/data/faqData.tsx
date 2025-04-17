import { FAQSection } from '../types/faq';

export const faqData: FAQSection[] = [
  {
    title: "How the Design Process Works at Zadach Design",
    description: "At Zadach Design, we pride ourselves on using advanced workflows to deliver a seamless and interactive design experience. Here's how we guide you through the process:",
    items: [
      {
        question: "What is your design process?",
        answer: (
          <div className="space-y-4">
            <p><strong>Emailed PDF Documentation:</strong> At every stage of the design process, we send you PDF documents that are easy to review and share your feedback. These files provide clear visuals of your project's progress, keeping you fully informed every step of the way.</p>
            <p><strong>Interactive 3D Viewer Access:</strong> Experience your design like never before with our interactive 3D viewer. This tool allows you to explore your project in detail, offering a realistic understanding of the space and design elements.</p>
            <p><strong>Collaborative Zoom Meetings:</strong> To ensure clear communication and collaboration, we schedule Zoom meetings at key milestones. During these sessions, we'll walk you through the designs, make any necessary adjustments, and address any questions you may have.</p>
            <p>Our approach keeps you actively involved and ensures that your vision is brought to life with precision and clarity—from initial concepts to finalized construction documents.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Preparing for Your Home Design or Remodel",
    description: "Essential information to help you get started with your project",
    items: [
      {
        question: "How do I organize my ideas?",
        answer: (
          <div className="space-y-4">
            <p>Start by collecting inspiration and organizing your thoughts. Tools like Pinterest and Houzz.com are perfect for saving images of homes, kitchens, and design elements you love. Create a folder (digital or physical) to gather the following:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Photos of designs you like (interior and exterior)</li>
              <li>Notes on your must-haves (e.g., walk-in pantry, vaulted ceilings)</li>
              <li>Examples of materials, finishes, and styles you prefer</li>
            </ul>
          </div>
        )
      },
      {
        question: "What should I share with the designer?",
        answer: (
          <div className="space-y-4">
            <p>The more information, the better! Be prepared to share:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your budget range and any non-negotiable costs</li>
              <li>A general timeline for when you'd like the project completed</li>
              <li>Your specific goals, such as an open floor plan, a custom kitchen, or maximizing natural light</li>
              <li>Inspiration photos or links from your Pinterest or Houzz boards</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    title: "Design Process and Timeline",
    items: [
      {
        question: "How long does the design process take?",
        answer: (
          <div className="space-y-4">
            <p>The timeline depends on the complexity of the project, but here's a general breakdown:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Initial Consultation: 1–2 weeks (to gather ideas and create concepts)</li>
              <li>Design Phase: 3–4 weeks (to finalize drawings and make revisions)</li>
              <li>ARC or Permit Submission: Varies depending on HOA or local regulations</li>
            </ul>
          </div>
        )
      },
      {
        question: "Do I need a contractor before hiring you?",
        answer: "Not necessarily! Many clients start with me for the design phase, then bring in a contractor once the plans are finalized. I'm happy to collaborate with your contractor or recommend one."
      },
      {
        question: "What's included in your design services?",
        answer: (
          <div className="space-y-4">
            <p>I offer a range of services, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Custom home design and remodeling plans</li>
              <li>3D modeling and architectural renderings</li>
              <li>Detailed construction drawings ready for permits and builders</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    title: "Geo-Location Technology",
    description: "Learn how we use advanced geo-location technology to optimize your home's design for its specific location",
    items: [
      {
        question: "What is Geo-Location technology, and how is it used in my project?",
        answer: "Geo-location technology allows me to pinpoint the exact location of your property anywhere in the world. This data provides critical insights that help enhance the design process and ensure your home is perfectly tailored to its environment."
      },
      {
        question: "What are the benefits of Geo-Location in home design?",
        answer: (
          <div className="space-y-4">
            <p>Using geo-location, I can analyze several critical factors:</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Sun Studies</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analyze how sunlight interacts with your property throughout all seasons</li>
                  <li>Identify the best placement for windows to maximize natural light</li>
                  <li>Optimize energy efficiency by designing for passive heating and cooling</li>
                  <li>Create outdoor spaces with ideal sun exposure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Terrain Elevations</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Understand the exact topography of your property</li>
                  <li>Plan for slopes, hills, or uneven terrain</li>
                  <li>Design foundations, retaining walls, or landscaping to fit the land perfectly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Climate Considerations</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Design for wind direction to optimize ventilation</li>
                  <li>Plan roof pitches and drainage systems for your area's rainfall levels</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        question: "Can Geo-Location help with sustainability?",
        answer: (
          <div className="space-y-4">
            <p>Absolutely! Geo-location technology allows me to design homes that are environmentally responsible by:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identifying optimal locations for solar panels</li>
              <li>Creating designs that work with the land to minimize excavation or environmental disruption</li>
              <li>Incorporating natural shading or windbreaks to reduce energy consumption</li>
            </ul>
          </div>
        )
      },
      {
        question: "How does this technology impact real-world designs?",
        answer: (
          <div className="space-y-4">
            <p>Here are some example scenarios where geo-location makes a significant difference:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Mountainous Terrain:</strong> For hillside properties, we can design multi-level structures or include terraces that take advantage of the views while working with the natural slope.</li>
              <li><strong>Coastal Properties:</strong> For beachfront homes, we factor in prevailing winds, potential flood zones, and sun studies to create durable, weather-resistant designs.</li>
              <li><strong>Urban Lots:</strong> On tight city lots, we can optimize privacy and sunlight by analyzing the shadows cast by nearby buildings.</li>
            </ul>
            <p className="mt-4">By incorporating geo-location data into the design process, I ensure your home isn't just beautiful but also functional, efficient, and perfectly suited to your property's unique characteristics.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Architectural Review Committee (ARC) Requirements",
    items: [
      {
        question: "What is the ARC, and why is it important?",
        answer: "The Architectural Review Committee (ARC) is typically part of a Homeowners' Association (HOA) that reviews and approves design plans for new builds, additions, or remodels. Their goal is to ensure all projects comply with community design guidelines and maintain neighborhood aesthetics."
      },
      {
        question: "What documents do I need for ARC approval?",
        answer: (
          <div className="space-y-4">
            <p>Each ARC has its own specific requirements, but common items include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tree Survey: A map showing existing trees on the property</li>
              <li>Property Plat: A drawing showing the boundaries and dimensions of your property</li>
              <li>Site Plan: A detailed plan showing where the home or addition will sit on the lot</li>
              <li>HOA Guidelines or Standards: Many communities have design standards for colors, roof pitch, exterior materials, and more</li>
            </ul>
          </div>
        )
      },
      {
        question: "How do I prepare for an ARC submission?",
        answer: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact your HOA or ARC for a list of required documents</li>
            <li>Work with your designer to prepare accurate plans and renderings</li>
            <li>Double-check submission deadlines to ensure your project stays on schedule</li>
          </ul>
        )
      }
    ]
  }
];