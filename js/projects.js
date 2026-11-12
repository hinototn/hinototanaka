/* Content file: update projects here to rearrange the homepage. All project pages are normal static HTML. */
const site = { email: "htanaka@middlebury.edu", linkedin: "https://www.linkedin.com/in/hinoto-tanaka/" };
/*
 * HOW THIS LIST WORKS
 * Each { ... } block is one project card on the homepage.
 * The fields that show up on the site:
 *   "title"       – project name under the thumbnail
 *   "description" – the short line (subtitle) under the title
 *   "year"        – shown after the subtitle
 *   "group"       – "selected" puts the card under Selected work,
 *                   "more" puts it under More work
 *   "image"       – the 4:3 thumbnail in images/thumbs/
 *   "imageAlt"    – what the thumbnail shows, for screen readers
 *   "page"        – the project page the card links to
 * The other fields (number, slug, categories, color) are notes for you;
 * the site does not display them.
 *
 * TO REORDER: move a whole { ... } block up or down. The order inside
 * each group follows the order here.
 * TO ADD A PROJECT: copy a whole block, change its values, add its two
 * HTML pages (projects/ and ja/projects/). See EDITING-GUIDE.md.
 * Keep the English (projects.js) and Japanese (projects-ja.js) lists in
 * the SAME order with the SAME group values.
 * Don't forget the comma between blocks.
 */
const projects = [
  {
    "number": "01",
    "slug": "okinawa-twice-colonized",
    "title": "Okinawa, Twice Colonized",
    "year": "2025",
    "categories": [
      "Cartography",
      "Environmental storytelling"
    ],
    "description": "The Lasting Scars of U.S. Militarization in Okinawa, Japan",
    "image": "images/thumbs/okinawa-twice-colonized.webp",
    "imageAlt": "A thematic map of Okinawa with U.S. military installations in red against land-cover and coral-reef classes",
    "color": "#cadfe8",
    "page": "projects/okinawa-twice-colonized.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 727
  },
  {
    "number": "02",
    "slug": "the-danish-kollektiv",
    "title": "The Danish Kollektiv",
    "year": "2026",
    "categories": [
      "Research",
      "Cartography"
    ],
    "description": "Spatial Patterns of Kollektiver in Copenhagen, Denmark",
    "image": "images/thumbs/the-danish-kollektiv.webp",
    "imageAlt": "The Danish Kollektiver NACIS map, showing housing types across Copenhagen with hand-drawn architectural scenes",
    "color": "#dbe8e5",
    "page": "projects/the-danish-kollektiv.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 727
  },
  {
    "number": "03",
    "slug": "green-spaces-by-the-border",
    "title": "Green Spaces by the Border",
    "year": "2026",
    "categories": [
      "Cartography",
      "Rural geography"
    ],
    "description": "Land Development and Ownership in Pownal, Vermont",
    "image": "images/thumbs/green-spaces-by-the-border.webp",
    "imageAlt": "Town of Pownal Vermont green-space and parcel map with roads, forested parcels and a locator globe",
    "color": "#d5e2ce",
    "page": "projects/green-spaces-by-the-border.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 647
  },
  {
    "number": "04",
    "slug": "mapping-housing-potential",
    "title": "Mapping Housing Potential",
    "year": "2026",
    "categories": [
      "GIS",
      "Planning"
    ],
    "description": "Identifying Potential Housing Development Zones in Addison County, Vermont",
    "image": "images/thumbs/mapping-housing-potential.webp",
    "imageAlt": "Map of Addison County showing candidate housing development zones hatched pink, schools, stores, and wetlands",
    "color": "#f2eee9",
    "page": "projects/mapping-housing-potential.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 1546
  },
  {
    "number": "05",
    "slug": "re-drawing-voting-access",
    "title": "Re-Drawing Voting Access",
    "year": "2025",
    "categories": [
      "GIS",
      "Civic geography"
    ],
    "description": "Polling-Place Walkability and Voting Access in Richmond, Virginia",
    "image": "images/thumbs/re-drawing-voting-access.webp",
    "imageAlt": "Map of Richmond precincts showing changes in the share of homes more than one mile from a polling station",
    "color": "#eddae1",
    "page": "projects/re-drawing-voting-access.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 707
  },
  {
    "number": "06",
    "slug": "redlined-chicago",
    "title": "Redlined Chicago",
    "year": "2025",
    "categories": [
      "GIS",
      "Urban geography"
    ],
    "description": "Race, Redlining, Housing, and Green-Space Access in Chicago, Illinois",
    "image": "images/thumbs/redlined-chicago.webp",
    "imageAlt": "Chicago census tracts shaded by redlining index, with stronger red values across parts of the South and West Sides",
    "color": "#f1dcdb",
    "page": "projects/redlined-chicago.html",
    "group": "selected",
    "imageWidth": 984,
    "imageHeight": 1168
  },
  {
    "number": "07",
    "slug": "mapping-the-gaps",
    "title": "Mapping the Gaps",
    "year": "2025",
    "categories": [
      "Field survey",
      "Accessibility"
    ],
    "description": "Tactile Paving and Pedestrian Accessibility at Middlebury College, Vermont",
    "image": "images/thumbs/mapping-the-gaps.webp",
    "imageAlt": "Middlebury College campus tactile paving survey, with blue symbols for existing accessible infrastructure and red symbols for barriers",
    "color": "#f5f2ee",
    "page": "projects/mapping-the-gaps.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 1000
  },
  {
    "number": "08",
    "slug": "lines-of-power",
    "title": "Lines of Power",
    "year": "2026",
    "categories": [
      "Political geography",
      "GIS"
    ],
    "description": "Gerrymandering and Congressional Redistricting in California",
    "image": "images/thumbs/lines-of-power.webp",
    "imageAlt": "Side-by-side maps showing Republican vote percentages under 2021 and AB 604 California congressional districts",
    "color": "#eff0f0",
    "page": "projects/lines-of-power.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 524
  },
  {
    "number": "09",
    "slug": "map-design",
    "title": "Cartographic Studies",
    "year": "2025",
    "categories": [
      "Design",
      "Typography"
    ],
    "description": "Cartographic Symbolization and Typography Studies",
    "image": "images/thumbs/map-design.webp",
    "imageAlt": "Symbol pattern sheet showing twelve vector cartographic symbol recreations and accompanying techniques",
    "color": "#f6f4ef",
    "page": "projects/map-design.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 647
  },
  {
    "number": "10",
    "slug": "downtown-derby",
    "title": "Downtown Derby",
    "year": "2026",
    "categories": [
      "GIS",
      "Urban geography"
    ],
    "description": "Urban Geography and Spatial Analysis in Louisville, Kentucky",
    "image": "images/thumbs/downtown-derby.webp",
    "imageAlt": "Orange choropleth showing areas with 50 or more housing units in central Louisville",
    "color": "#f8eadc",
    "page": "projects/downtown-derby.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 749
  }
];
