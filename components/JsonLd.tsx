export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Applied Technologies',
    url: 'https://www.appliedtek.co.in',
    logo: 'https://www.appliedtek.co.in/logo.png',
    description: 'Applied Technologies provides Engineering Manufacturing & Design services for Defense, Automotive, Construction Equipment manufacturers. ISO certified precision machining, CNC services in Pune.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No.29/4, D1 Block, M.I.D.C. AKUDI INDUSTRIAL ESTATE, AKURDI',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411 019',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9922-83-7133',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
    sameAs: [
      'https://www.appliedtek.co.in',
    ],
    founder: {
      '@type': 'Person',
      name: 'Abhijeet Londhe',
    },
    foundingDate: '2000',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 24,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
