// ALL business information is fictional demo content. Never use these placeholders for live enquiries.
export const business = {
  name: 'FlowPro Plumbing', phone: '010 000 0000', phoneHref: '+27100000000',
  whatsapp: '27100000000', email: 'hello@flowpro.example',
  demoMode: true, // Set false ONLY after replacing phone, WhatsApp, email and business content.
  enquiry: 'Hi FlowPro, I would like a plumbing quote. My suburb is: …\nI need help with: …',
};
export const whatsappUrl = (message = business.enquiry) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const services = [
 ['leak','Leak detection','Find the source. Fix the problem. Help prevent unnecessary water loss and damage.'],
 ['pipe','Burst pipes','Practical repairs for damaged pipes, with clear advice on the next steps.'],
 ['drain','Blocked drains','Get sinks, showers and waste lines flowing freely again.'],
 ['geyser','Geyser installation & repairs','Help with hot-water problems, replacements and new installations.'],
 ['bath','Bathroom plumbing','From a dripping shower to the plumbing behind a full bathroom renovation.'],
 ['kitchen','Kitchen plumbing','Sink and tap installations, appliance connections and everyday repairs.'],
 ['tools','General maintenance','Take care of small plumbing issues before they become bigger disruptions.'],
 ['building','Commercial plumbing','Plumbing support for offices, shops and managed properties.'],
] as const;
export const faqs = [
 ['Which areas do you cover?','This demo illustrates service coverage across Johannesburg’s northern suburbs, including Sandton, Bryanston, Fourways, Randburg, Rosebank and Midrand. A live business would confirm coverage when you enquire.'],
 ['How do I request a quote?','Tell us what needs attention, your suburb and a convenient time. The quote form prepares a WhatsApp message for you to review and send. In this portfolio demo, you can preview the message without contacting a business.'],
 ['Can I send photos of the problem?','Yes. In a live WhatsApp conversation, you could attach photos after sending your enquiry. A close-up and a wider photo of the area can help explain the issue.'],
 ['Do you work on geysers and renovations?','The example service offering includes geyser repairs and installations, bathroom and kitchen plumbing, and commercial maintenance. The exact work and requirements would be confirmed before booking.'],
 ['Will I know the cost before work starts?','The intended process is to assess the job, explain the recommended work and provide a quote for approval. No prices or turnaround times are promised in this demo.'],
 ['Is this a real plumbing company?','No. FlowPro Plumbing is a fictional portfolio website. The business details, project descriptions and review examples are placeholders. No bookings, payments or real service requests are accepted.'],
];
