import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const today = '2026-09-07';
const base = 'https://syracuseappraiser.com';
const socialImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Syracuse_NY_skyline.jpg/1280px-Syracuse_NY_skyline.jpg';

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
}
walk(root);

const titleOverrides = {
  '/': 'Syracuse NY Real Estate Appraiser | Certified Residential',
  '/resources.html': 'Syracuse NY Property & Appraisal Resources',
  '/services/': 'Residential Appraisal Services | Syracuse NY',
  '/services/mortgage-pmi-appraisal.html': 'Mortgage, Refinance & PMI Appraisals | Syracuse NY',
  '/services/waterfront-acreage-appraisal.html': 'Waterfront & Acreage Appraiser | Syracuse NY',
  '/guides/unique-home-appraisal-guide.html': 'Unique Home Appraisal Guide | Central New York',
  '/guides/pre-purchase-appraisal-guide.html': 'Pre-Purchase Appraisal Guide | Syracuse NY',
  '/guides/bankruptcy-appraisal-guide.html': 'Bankruptcy Appraisal Guide | Central New York',
  '/guides/appraisal-process-timeline-guide.html': 'Home Appraisal Process & Timeline | Syracuse NY',
  '/guides/reconsideration-of-value-guide.html': 'Appraisal Reconsideration of Value Guide',
  '/guides/two-to-four-family-appraisal-guide.html': '2–4 Family Property Appraisal Guide | Syracuse NY',
  '/guides/divorce-appraisal-guide.html': 'Divorce Appraisal Guide | Central New York',
  '/guides/home-equity-refinance-appraisal-guide.html': 'Home Equity & Refinance Appraisal Guide',
  '/guides/appraisal-vs-cma.html': 'Appraisal vs. CMA | Syracuse NY Guide',
  '/areas/': 'Central New York Appraisal Service Areas'
};

const descOverrides = {
  '/': 'NY State Certified residential real estate appraisals in Syracuse and Central New York for estates, divorce, tax, private, mortgage and complex properties.',
  '/services/': 'Certified residential appraisal services in Syracuse and Central New York for estates, divorce, tax, private decisions, lending and complex properties.',
  '/guides/bankruptcy-appraisal-guide.html': 'How bankruptcy-related residential appraisals define the client, property interest, effective date, records and intended use in Central New York.',
  '/guides/manufactured-home-appraisal-guide.html': 'A guide to manufactured-home appraisals in Central New York, including identification, land ownership, foundations, additions and comparable research.',
  '/areas/dewitt.html': 'Certified residential appraisal services in DeWitt, including established neighborhoods and properties with East Syracuse or Jamesville mailing addresses.',
  '/areas/syracuse.html': 'Certified residential appraisal services throughout Syracuse, with analysis grounded in the neighborhood and market where the property competes.'
};

const serviceAdditions = {
  'estate-appraisal.html': `<section class="seo-detail"><h2>Estate and date-of-death appraisal scope</h2><p>Estate work often calls for a value opinion as of the date of death, although an executor, attorney or tax professional may identify another effective date. The report must answer that specific assignment question—not simply estimate what the property might sell for today. We confirm the client, intended users, intended use, property interest and effective date before beginning.</p><p>For a retrospective assignment, the appraiser researches market evidence available around the historical date and considers what was known about the property's condition at that time. Deeds, surveys, prior listings, photographs, renovation records and estate documents can help establish a reliable factual record. The resulting appraisal is an independent valuation document; legal and tax decisions remain with the estate's advisers.</p><h2>Residential properties throughout Central New York</h2><p>Assignments may involve a typical Syracuse-area home, a two- to four-family property, rural acreage, waterfront property or a residence with limited comparable sales. The scope and fee reflect the property and research required. See our <a href="../guides/probate-estate-appraisal-guide.html">probate and estate appraisal guide</a> and <a href="../guides/estate-effective-date-guide.html">effective-date guide</a> before requesting a quote.</p></section>`,
  'divorce-appraisal.html': `<section class="seo-detail"><h2>A neutral opinion for a defined legal question</h2><p>A divorce appraisal should begin with a clearly identified client, intended use and effective date. Depending on counsel's instructions, the assignment may require current market value, value as of a prior date, or both. We do not advocate for either party or work toward a predetermined number; the analysis follows the property facts and relevant market evidence.</p><p>Access, improvements made during ownership, deferred maintenance and the ownership interest being appraised can affect the scope. When a historical date is required, documents and photographs may help establish the property's condition at that time. Attorneys and clients should agree on the valuation question before the appraisal begins.</p><h2>Clear reporting for professional review</h2><p>The report explains the subject property, comparable selection, adjustments and reconciliation in enough detail for the intended users to understand the value conclusion. An appraisal is valuation evidence, not legal advice and not a prediction of a negotiated settlement. Review the <a href="../guides/divorce-appraisal-guide.html">Central New York divorce appraisal guide</a> for a practical preparation checklist.</p></section>`,
  'retrospective-appraisal.html': `<section class="seo-detail"><h2>Historical value requires historical evidence</h2><p>A retrospective appraisal develops an opinion of value as of a date in the past. It does not take today's value and work backward by a simple percentage. The appraiser researches sales, listings, market conditions and other evidence relevant to the requested effective date, then analyzes the property as it existed at that time.</p><p>These assignments are common for estates, divorce matters, tax questions, litigation and other professional uses. Helpful records may include prior listings, dated photographs, permits, surveys, deeds and a timeline of renovations. The availability and reliability of historical information can affect scope, timing and fee.</p><h2>Define the assignment before ordering</h2><p>The attorney, accountant or other adviser should confirm the precise valuation date and intended use. A current inspection may still be useful, but present-day observations must be distinguished from historical condition. Our <a href="../guides/retrospective-appraisal-guide.html">retrospective appraisal guide</a> explains the process and records to gather.</p></section>`,
  'tax-grievance-appraisal.html': `<section class="seo-detail"><h2>Start with the municipality's valuation framework</h2><p>A tax assessment, equalized value and independent market-value opinion are related concepts, but they are not automatically the same number. Before ordering an appraisal, confirm the applicable valuation date, filing deadline, assessment information and local review procedure with the assessor or a qualified adviser. Those requirements determine whether an appraisal can address the question at issue.</p><p>The assignment analyzes the subject property and market evidence relevant to the defined date. Physical condition, location, property rights, comparable sales and unusual features may all matter. The appraiser does not file the grievance, promise a reduction or provide legal advice.</p><h2>When an appraisal may be useful</h2><p>An independent report can help an owner and adviser evaluate whether market evidence supports a materially different value. It is most useful when the potential issue is large enough to justify the appraisal cost and when the required timeline allows adequate research. See the <a href="../guides/tax-assessment-review-guide.html">assessment review guide</a> and official links on our <a href="../resources.html">property resources page</a>.</p></section>`,
  'pre-listing-appraisal.html': `<section class="seo-detail"><h2>When a private appraisal adds clarity</h2><p>A private residential appraisal can be useful when a property is unusual, a family transfer needs an independent benchmark, a buyer or owner wants a non-sales opinion, or automated estimates vary widely. The assignment is tailored to the actual decision and identifies the client, intended use, property interest and effective date.</p><p>The appraiser inspects the property when the agreed scope calls for it, researches the competitive market and explains the value conclusion. The report is not a home inspection, title opinion or guarantee of a future sale price. It is an objective valuation based on the information and market evidence available as of the effective date.</p><h2>Appraisal, CMA and online estimate</h2><p>A real estate agent's comparative market analysis supports a pricing and marketing discussion. An appraisal is performed by a credentialed appraiser under professional appraisal standards for a defined client and use. Read our <a href="../guides/appraisal-vs-cma.html">appraisal vs. CMA guide</a> or the <a href="../guides/pre-listing-appraisal-guide.html">pre-listing appraisal guide</a> to choose the right tool.</p></section>`,
  'mortgage-pmi-appraisal.html': `<section class="seo-detail"><h2>Who orders the appraisal matters</h2><p>For most mortgage, refinance, home-equity and PMI decisions, the lender or servicer controls the appraisal process and selects the appraiser through its approved channel. A homeowner-ordered private appraisal usually cannot be substituted for a lender-ordered report. Contact the institution first and ask what evidence or process it accepts.</p><p>When Accurate Real Estate Appraisals is engaged through the appropriate channel, the assignment follows the lender's scope and appraisal-independence requirements. Property access, safety, completed improvements and requested documentation can affect scheduling, but neither the borrower nor another interested party can direct the value conclusion.</p><h2>Useful preparation</h2><p>Provide safe access to all areas, a concise list of significant improvements and any reliable plans or surveys for additions, acreage or unusual features. Do not rely on a renovation's cost as proof of market value. The <a href="../guides/home-equity-refinance-appraisal-guide.html">home-equity and refinance guide</a> and <a href="../guides/prepare-for-appraisal.html">preparation guide</a> explain what to expect.</p></section>`,
  'waterfront-acreage-appraisal.html': `<section class="seo-detail"><h2>Complex homes need a broader market search</h2><p>Waterfront, large-acreage, rural and custom properties may have few nearby sales that share the same bundle of characteristics. The most useful comparable is not necessarily the closest or newest sale. The analysis may need to consider a wider geographic area, older transactions, competing waterfronts or rural markets, and differences in site utility and improvement quality.</p><p>For lake property, frontage, access, view, elevation, shoreline utility, water body and seasonal or year-round use can affect buyer reaction. For acreage, usable land, topography, outbuildings, access and development limitations can matter more than the raw acre count. Custom construction and unusual layouts require similar attention to marketability rather than cost alone.</p><h2>Information that improves the assignment</h2><p>Surveys, deeds, permits, floor plans, utility details, waterfront rights and a history of major improvements can help define the property correctly. Complex-property fees reflect the research and analysis required. Read the <a href="../guides/waterfront-appraisal-guide.html">waterfront appraisal guide</a>, <a href="../guides/rural-acreage-appraisal-guide.html">rural acreage guide</a> or <a href="../guides/unique-home-appraisal-guide.html">unique-home guide</a>.</p></section>`
};

const aboutAddition = `<section class="seo-detail"><h2>Credentialed, independent residential valuation</h2><p>Syracuse Appraiser is the local web presence of Accurate Real Estate Appraisals, a division of ARE Appraisals, Inc. The practice has provided independent residential appraisal services in Central New York since 2007. Assignments are completed by a New York State Certified Residential Real Estate Appraiser and developed for the client, intended use and effective date established at engagement.</p><p>We appraise real property: houses, condominium units, two- to four-family properties, waterfront homes, rural acreage, manufactured homes and other residential property. We do not appraise jewelry, furniture, art or other personal property. That distinction matters when selecting an appraiser.</p><h2>Professional standards and a defined scope</h2><p>Each assignment begins by identifying the valuation problem. Estate, divorce, tax, private and lending-related matters can require different users, dates, property rights and report scopes. Appraisal conclusions are based on relevant market evidence and communicated in a report appropriate to the assignment. We do not sell real estate, advocate for a target value or guarantee a particular outcome.</p><p>Local work includes Syracuse and communities throughout Onondaga County, with additional Central New York coverage where the property and assignment are a fit. Complex properties may require additional research, records or scheduling time. The fastest way to receive an informed response is to send the property address, intended use, effective date if known and any unusual property characteristics.</p></section>`;

function urlPath(file) {
  const rel = path.relative(root, file).replaceAll(path.sep, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -10);
  return '/' + rel;
}

function esc(s) { return s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }
function strip(s) {
  s = s.replace(/<[^>]*>/g, '');
  while (s.includes('&amp;')) s = s.replace(/&amp;/g, '&');
  return s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const route = urlPath(file);
  const canonical = route === '/' ? `${base}/` : `${base}${route}`;
  let title = titleOverrides[route] || strip(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || 'Syracuse Appraiser');
  if (title.length > 60) title = title.replace(/\s*\|\s*Syracuse Appraiser$/i, '').slice(0, 59).trim();
  let description = descOverrides[route] || (html.match(/<meta name="description" content="([^"]*)"/i)?.[1] || 'Independent residential real estate appraisals in Syracuse and Central New York.');
  if (description.length > 160) description = description.slice(0, 157).replace(/\s+\S*$/, '') + '…';
  const h1 = strip(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || title);
  const isGuide = route.startsWith('/guides/') && route !== '/guides/';
  const isService = route.startsWith('/services/') && route !== '/services/';
  const isArea = route.startsWith('/areas/') && route !== '/areas/';

  html = html.replace('<html lang="en">', '<html lang="en-US">');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${esc(description)}">`);

  html = html.replace(/<meta property="og:[^>]+>/gi, '').replace(/<meta name="twitter:[^>]+>/gi, '');
  const social = `<meta property="og:type" content="${isGuide ? 'article' : 'website'}"><meta property="og:site_name" content="Syracuse Appraiser"><meta property="og:locale" content="en_US"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${socialImage}"><meta property="og:image:alt" content="Syracuse, New York skyline"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="Syracuse, New York skyline">`;
  html = html.replace(/(<link rel="canonical"[^>]*>)/i, `$1${social}`);

  html = html.replace(/<script type="application\/ld\+json"(?: id="site-schema")?>[\s\S]*?<\/script>/gi, block => {
    if (block.includes('id="site-schema"')) return '';
    if (block.includes('"@type":"ProfessionalService"')) return '';
    return block;
  });
  const crumbs = [{ name: 'Home', item: `${base}/` }];
  if (route.startsWith('/services/')) crumbs.push({ name: 'Services', item: `${base}/services/` });
  if (route.startsWith('/areas/')) crumbs.push({ name: 'Service Areas', item: `${base}/areas/` });
  if (route.startsWith('/guides/')) crumbs.push({ name: 'Appraisal Guides', item: `${base}/guides/` });
  if (!['/', '/services/', '/areas/', '/guides/'].includes(route)) crumbs.push({ name: h1, item: canonical });
  const graph = [
    {
      '@type': 'ProfessionalService', '@id': `${base}/#business`, name: 'Accurate Real Estate Appraisals',
      alternateName: 'Syracuse Appraiser', url: `${base}/`, telephone: '+1-315-413-5024',
      email: 'info@accuratereappraisals.org', image: socialImage,
      description: 'Independent residential real estate appraisal services in Syracuse and Central New York.',
      parentOrganization: { '@type': 'Organization', name: 'ARE Appraisals, Inc.', url: 'https://accuratereappraisals.org/' },
      areaServed: [
        { '@type': 'City', name: 'Syracuse' }, { '@type': 'AdministrativeArea', name: 'Onondaga County' },
        { '@type': 'AdministrativeArea', name: 'Central New York' }
      ],
      serviceType: ['Residential real estate appraisal', 'Estate appraisal', 'Divorce appraisal', 'Retrospective appraisal', 'Property tax appraisal', 'Private home appraisal', 'Waterfront and acreage appraisal']
    },
    {
      '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, description,
      inLanguage: 'en-US', dateModified: today, isPartOf: { '@id': `${base}/#website` },
      about: { '@id': `${base}/#business` }
    },
    {
      '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item }))
    }
  ];
  if (route === '/') graph.push({ '@type': 'WebSite', '@id': `${base}/#website`, url: `${base}/`, name: 'Syracuse Appraiser', publisher: { '@id': `${base}/#business` }, inLanguage: 'en-US' });
  if (isService) graph.push({ '@type': 'Service', name: h1, serviceType: h1, provider: { '@id': `${base}/#business` }, areaServed: { '@type': 'AdministrativeArea', name: 'Central New York' } });
  if (isArea) {
    const place = h1.replace(/\s+Real Estate Appraiser.*$/i, '');
    graph.push({ '@type': 'Service', name: `Residential real estate appraisal in ${place}, New York`, serviceType: 'Residential real estate appraisal', provider: { '@id': `${base}/#business` }, areaServed: { '@type': 'City', name: place } });
  }
  const schema = `<script type="application/ld+json" id="site-schema">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
  html = html.replace('</head>', `${schema}</head>`);

  if (isService) {
    const addition = serviceAdditions[path.basename(file)];
    if (addition && !html.includes('class="seo-detail"')) {
      html = html.includes('<div class="callout">')
        ? html.replace('<div class="callout">', `${addition}<div class="callout">`)
        : html.replace('</article>', `${addition}</article>`);
    }
  }
  if (route === '/about.html' && !html.includes('Credentialed, independent residential valuation')) {
    html = html.replace('<div class="callout">', `${aboutAddition}<div class="callout">`);
  }
  if (route === '/request-appraisal.html' && !html.includes('What happens after you contact us')) {
    const requestInfo = `<section class="seo-detail"><h2>What happens after you contact us</h2><p>We review the property, intended use, effective date and any unusual features before confirming whether the assignment is a fit. You will receive information about scope, fee and scheduling before work begins. Complex, waterfront, acreage and historical-date assignments may require additional records or research.</p><p>Your initial message does not need to contain confidential legal or financial details. Start with the property address and general purpose. An appraisal is accepted only after the client and assignment terms are confirmed.</p></section>`;
    html = html.replace('<div class="callout">', `${requestInfo}<div class="callout">`);
  }
  if (route === '/guides/' && !html.includes('syracuse-home-appraisal-cost.html')) {
    const tile = `<a class="service-tile" href="syracuse-home-appraisal-cost.html"><h2>Home Appraisal Cost in Syracuse</h2><p>What affects a residential appraisal fee and what to include when requesting a quote.</p></a>`;
    html = html.replace('<a class="service-tile" href="appraisal-vs-cma.html">', `${tile}<a class="service-tile" href="appraisal-vs-cma.html">`);
  }
  if (route === '/request-appraisal.html' && !html.includes('guides/syracuse-home-appraisal-cost.html')) {
    html = html.replace('</article>', `<p>Wondering what affects the fee? Read the <a href="guides/syracuse-home-appraisal-cost.html">Syracuse home appraisal cost guide</a>.</p></article>`);
  }

  html = html.replace(/<section class="credentials-band"[\s\S]*?<\/section>/, '');
  const aboutHref = path.relative(path.dirname(file), path.join(root, 'about.html')).replaceAll(path.sep, '/');
  const trust = `<section class="credentials-band" aria-label="Appraiser credentials"><div class="wrap credential-items"><strong>NY State Certified Residential Appraiser</strong><span>Independent residential valuation since 2007</span><span>Real property—not personal property</span><a href="${aboutHref}">About the practice</a></div></section>`;
  html = html.replace('</main>', `${trust}</main>`);

  fs.writeFileSync(file, html);
}

const urls = files.filter(f => path.basename(f) !== '404.html').map(f => {
  const route = urlPath(f);
  return route === '/' ? `${base}/` : `${base}${route}`;
}).sort((a, b) => a === `${base}/` ? -1 : b === `${base}/` ? 1 : a.localeCompare(b));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
console.log(`Updated ${files.length} HTML pages and ${urls.length} sitemap URLs.`);
