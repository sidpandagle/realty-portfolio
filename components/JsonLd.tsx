export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Applied Technologies',
    url: 'https://www.appliedtek.co.in',
    logo: 'https://www.appliedtek.co.in/logo-square.png',
    description: 'Applied Technologies provides Engineering Manufacturing & Design services for Defense, Automotive, Construction Equipment manufacturers. Manufacturer of LIFTTEK screw jacks, trailer jacks, lighting tower screw jacks, towing jacks, and parking jacks. ISO certified precision machining, CNC services in Pune.',
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

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Applied Technologies',
    url: 'https://www.appliedtek.co.in',
    description: 'Precision Engineering & Manufacturing Solutions for Defense, Automotive, and Construction Equipment. Manufacturer of LIFTTEK Screw Jacks, Trailer Jacks, and Lifting Equipment.',
    publisher: {
      '@type': 'Organization',
      name: 'Applied Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.appliedtek.co.in/logo-square.png',
        width: 512,
        height: 512,
      },
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'LIFTTEK Series Screw Jack',
    description: 'NABL lab certified and ARAI approved screw jacks for heavy-duty applications. Available for construction equipment, trailers, lighting towers, agricultural machinery, and transit mixers. Telescopic design with high-efficiency gearbox, capacity up to 15 kN.',
    brand: {
      '@type': 'Brand',
      name: 'LIFTTEK',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Applied Technologies',
      url: 'https://www.appliedtek.co.in',
    },
    category: 'Lifting Equipment',
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'Applied Technologies',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Certification',
        value: 'NABL Lab Certified, ARAI Approved',
      },
      {
        '@type': 'PropertyValue',
        name: 'Maximum Load Capacity',
        value: '15 kN',
      },
      {
        '@type': 'PropertyValue',
        name: 'Stroke Range',
        value: '0 to 400mm',
      },
    ],
    keywords: 'screw jacks, trailer jacks, lighting tower screw jacks, towing jacks, parking jacks, telescopic jacks, mechanical jacks, lift systems, leveling jacks, stabilizer jacks, trailer landing gear, construction jacks, agricultural trailer jacks',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
