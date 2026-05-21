# WACO HTML Pages v2.2.1

This is the cumulative working package for the WACO HTML page project.

## Current pages included

- `home.html`

## Main updates in v2.2.1

- Redesigned the Product Range card layout to avoid row-span height conflicts.
- Redesigned the Projects card layout to avoid tight text and bottom spacing issues.
- Product and project cards now use nested grids instead of relying on a single grid with spanning rows.
- Card body areas now reserve stable space for 2-line titles and 2-line descriptions.
- Action links are pushed to the bottom with extra padding, while cards can grow naturally if content gets longer.

## CDN dependency

This version uses Swiper from CDN:

```html
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css
https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js
```

## Structure

```text
waco-html-pages-v2.2.1/
├── home.html
├── README.md
└── assets/
    ├── css/
    │   └── waco-pages.css
    ├── js/
    │   └── waco-pages.js
    ├── images/
    │   ├── home/
    │   ├── colours/
    │   ├── products/
    │   ├── decking/
    │   ├── wall-cladding/
    │   ├── installation/
    │   └── projects/
    └── vendor/
        └── swiper/
```

## Notes

- Header, logo, navigation and website footer are intentionally not included.
- Text content is still placeholder content because the current focus is layout architecture.
- Replace the image files or inline image URLs later with real WordPress media URLs.


## Card copy length guideline

For the most stable layout:

- Card tag: short phrase, preferably 1–3 words.
- Card title: ideally 1–2 lines.
- Card description: ideally 1–2 lines.
- Action link: short label, such as `View Guide`, `View Projects`, `Explore Colours`.

The CSS in this version already reserves space for 2-line titles and 2-line descriptions on product and project cards. If future content becomes longer than this, the grid rows can grow automatically on desktop instead of clipping the action link.


## Card design decision in v2.2.1

The previous card design used one grid where the large card spanned two rows. That makes the layout look like a Bento grid, but it becomes fragile when titles or descriptions have different lengths.

This version changes the structure:

- Product section: one large card + a separate 2×2 card grid.
- Project section: one large card + a separate vertical card grid.
- Each card has a stable structure: image area, tag, title, description, action link.
- The card can grow naturally instead of clipping or squeezing the action link.

This is safer for WordPress, dynamic content, multilingual content and future reusable templates.


## Main updates in v2.2.1

- Refined hero typography so the first screen feels more balanced and reusable.
- Slightly reduced the maximum hero title size and expanded the hero text area.
- Adjusted Product Range card proportions so image and text areas feel more balanced.
- Enlarged Featured Colours cards slightly to make the colour section more visible.
- Refined Projects card proportions for a more gallery-like layout.
- Reduced the visual weight of the CTA image preview so it does not compete with the CTA text.
- Kept the v2.2.1 stable nested grid structure.


## Main updates in v2.2.1

- Card titles are now limited to one line with ellipsis overflow.
- Card descriptions are now limited to two lines with hidden overflow.
- Card title font size was reduced slightly for better alignment.
- Card tag text is also constrained to one line.
- Colour card title and description text now follow the same controlled overflow rule.
- This makes card height calculation and alignment more predictable for dynamic content.


## Main updates in v2.2.1

- Rebuilt the overall section rhythm to reduce the loose, floating feeling between blocks.
- Reduced global section vertical padding.
- Reduced Product Range, Advantages, Colours, Projects and CTA spacing for a tighter page rhythm.
- Converted Product Range and Projects cards into clearer fixed-height desktop proportions.
- Reduced card title and description typography further for better alignment.
- Reduced excessive card body height now that titles are 1 line and descriptions are 2 lines.
- Balanced image/text proportions across product cards and project cards.


## Main updates in v2.2.1

- Rebuilt the CSS rhythm more aggressively instead of making small patch changes.
- Added cache-busting version query strings to the CSS and JS file links.
- Reduced hero height from the previous version.
- Reduced global section spacing and per-section vertical spacing.
- Made Product Range and Projects card heights visibly more compact.
- Reduced card body padding, image heights, title sizes and description sizes.
- Kept titles to one line and descriptions to two lines.
- This version was prepared specifically to avoid the browser showing cached CSS from earlier versions.


## Main updates in v2.2.1

- Set the readable minimum font size to 14px for card descriptions, tags, buttons and small text.
- Kept card titles to one line and descriptions to two lines.
- Hidden the homepage Hero left/right arrows to avoid overlapping the slide text.
- Kept the Hero arrow styles in CSS for future reuse if needed.
- Rebuilt the Project Inspiration layout as a universal 3-column equal card grid.
- Removed the previous right-side horizontal banner cards because they were too narrow and not generic enough for future websites.


## Main updates in v2.2.1

- Added a final CSS override layer to force the intended homepage layout.
- Enforced minimum readable font size of 14px for small text, tags, links, buttons and descriptions.
- Hidden Hero carousel arrows with `display: none !important`.
- Rebuilt Project Inspiration as a true 3-column equal card grid.
- Added cache-busting version numbers to CSS and JS links.
- Verified the generated HTML contains `waco-project-card-grid` and CSS contains the v2.2.1 override rules.


## Main updates in v2.2.1

- Rebuilt `assets/css/waco-pages.css` as a clean file rather than adding more override layers.
- Replaced the whole Project Inspiration section in `home.html` with a strict 3-card grid.
- Confirmed `home.html` uses `assets/css/waco-pages.css?v=1.0.14` and `assets/js/waco-pages.js?v=1.0.14`.
- Kept Hero arrows hidden.
- Kept small text at 14px minimum.


## v2.2.1 update

This version adds the second page:

- `products.html`

Main additions:

- Product listing page hero.
- Product category overview cards.
- Product filter buttons.
- Product grid with Decking / Cladding / Accessories / Samples categories.
- Product selection guide section.
- CTA section.
- Shared CSS and JS remain in `assets/css/waco-pages.css` and `assets/js/waco-pages.js`.
- CSS/JS links use `?v=1.1.0` to avoid browser cache.

Current pages included:

- `home.html`
- `products.html`


## v2.2.1 update

Product listing page revised:

- Inner page banner height set to 360px on desktop.
- Banner text is horizontally and vertically centered.
- Banner now only contains breadcrumb navigation and page title.
- Removed banner buttons.
- Removed large product category image cards.
- Product categories changed to button-style menu.
- Product grid is now the core area and uses 3 columns on desktop.
- Product tags removed from product cards.
- Product cards now include price and Add to Cart / View Details actions.
- Pagination added.
- The previous guide section was removed from `products.html`.

Current pages included:

- `home.html`
- `products.html`


## v2.2.1 update

This version adds the third page:

- `product-detail.html`

Product detail page includes:

- 360px inner page banner with breadcrumb and page title.
- Product image gallery with clickable thumbnails.
- Product title, short description and price.
- Colour and length option buttons.
- Quantity selector.
- Add to Cart and Request Quote actions.
- SKU / category / application summary.
- Product information tabs.
- Specification table.
- Installation notes.
- Related products.
- CTA section.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`


## v2.2.1 update

Product detail page revised:

- Product main image gallery changed to Swiper.
- Main image now has left/right arrows.
- Thumbnail gallery shows 5 thumbnails on desktop and 4 thumbnails on mobile.
- Colour buttons switch to the corresponding gallery image.
- Product gallery and product summary column ratio adjusted for desktop.
- Related Products card height and image/text ratio adjusted to reduce excessive blank space between description and price.
- CSS/JS cache-busting updated to `?v=1.2.1`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`


## v2.2.1 update

Product detail gallery fixed:

- Replaced the broken Swiper-dependent product detail gallery with a stable carousel structure.
- Main image carousel no longer stretches or collapses during local preview.
- Main image includes left/right arrows.
- Desktop thumbnails display 5 items.
- Mobile thumbnails display 4 items.
- Colour buttons switch to the corresponding main image.
- Product detail gallery and summary column proportions refined.
- Related Products card spacing between description and price reduced.
- CSS/JS cache-busting updated to `?v=1.2.2`.


## v2.2.1 update

Product detail page revised:

- Added a JS-powered magnifier effect to the product main image.
- The magnifier follows the cursor on desktop.
- The magnifier is disabled on mobile to avoid touch interaction problems.
- Current stable custom carousel is kept.
- CSS/JS cache-busting updated to `?v=1.2.3`.

Note:

- A pure CSS magnifier can only provide a simple hover zoom.
- A cursor-following magnifier needs JavaScript.
- The gallery can be rebuilt with Swiper later, but the current custom carousel is more stable for local preview and avoids the stretching issue seen earlier.


## v2.2.1 update

Product detail page zoom revised:

- Replaced the circular cursor-following magnifier with a WooCommerce-style hover zoom.
- The product image itself zooms in on hover.
- The zoom focal point follows the cursor via `transform-origin`.
- Added a zoom icon button on the main product image.
- Clicking the main image or zoom icon opens a lightbox-style large image preview.
- Lightbox supports close, previous, next and keyboard controls.
- Mobile hover zoom is disabled, but the lightbox remains available.
- Current stable custom carousel is kept.
- CSS/JS cache-busting updated to `?v=1.2.4`.

About Swiper:

The product gallery can be rebuilt with Swiper, but this version keeps the stable custom carousel because it avoids the thumbnail stretching issue from earlier. If needed, a separate Swiper-only version can be created later.


## v2.2.1 update

Homepage Product Range fix:

- Fixed style leakage from product list/detail page CSS into the homepage Product Range section.
- Restored homepage Product Range as:
  - Left large feature card
  - Right independent 2×2 small card grid
- Added a scoped CSS layer so `.waco-product-grid` on product pages no longer breaks homepage cards.
- CSS/JS cache-busting updated to `?v=1.2.5`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`


## v2.2.1 update

This version keeps the original product detail page and adds a second product detail page:

- `product-detail.html` keeps the stable custom carousel version.
- `product-detail-02.html` is a Swiper test version.

Product detail 02 includes:

- Swiper main product image carousel.
- Swiper thumbnail carousel.
- Desktop thumbnail carousel shows 5 thumbnails.
- Mobile thumbnail carousel shows 4 thumbnails.
- Main image left/right arrows.
- Colour buttons switch to corresponding Swiper slide.
- WooCommerce-style hover zoom.
- Lightbox preview.
- CSS and JS are scoped to `.waco-product-detail-swiper-page` to avoid affecting the original product detail page.
- CSS/JS cache-busting updated to `?v=1.3.0`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`


## v2.2.1 update

This version adds the blog list page:

- `blog.html`

Blog list page includes:

- 360px inner page banner with breadcrumb and page title.
- Featured article section.
- Blog category filter buttons.
- Blog archive card grid.
- Pagination.
- CTA section.
- Blog placeholder images in `assets/images/blog/`.

Product detail update:

- The Swiper product detail version is now the default `product-detail.html`.
- The previous custom-carousel version is preserved as `product-detail-legacy.html`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`


## v2.2.1 update

Cleanup and blog featured carousel update:

- Removed duplicate `product-detail-02.html`.
- Kept Swiper version as the default `product-detail.html`.
- Kept `product-detail-legacy.html` as the backup legacy product detail page.
- Changed the featured article image area on `blog.html` into a 3-slide Swiper carousel.
- Added dot pagination under the featured article image carousel.
- CSS/JS cache-busting updated to `?v=1.4.1`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`


## v2.2.1 update

Blog featured Swiper fix:

- Fixed the Featured Article left-side Swiper image area not displaying.
- Added stable min-height rules to the Swiper container, wrapper, slides and image links.
- Made the dot pagination visible over the image.
- Added a safer Swiper initialization that runs after DOM ready and forces layout recalculation.
- CSS/JS cache-busting updated to `?v=1.4.2`.


## v2.2.1 update

Blog featured carousel revised:

- The Featured Article section is now a 3-slide recommended blog carousel.
- Each slide contains the whole featured blog card: image + category/date + title + excerpt + link.
- Dot pagination has been moved outside and below the entire card.
- Swiping/dragging the featured card now updates the pagination dots.
- Autoplay remains enabled.
- CSS/JS cache-busting updated to `?v=1.4.3`.


## v2.2.1 update

This version adds the blog detail page:

- `blog-detail.html`

Blog detail page includes:

- 360px inner page banner with breadcrumb and page title.
- Article detail card.
- Article hero image.
- Article content area.
- Right sidebar article contents directory.
- The directory is automatically generated from article `h2` tags only.
- Smooth scrolling when clicking directory links.
- Current section highlight while scrolling.
- Related articles section.
- CTA section.
- Blog archive links updated to point to `blog-detail.html`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`


## v2.2.1 update

Blog detail page revised:

- Right-side article contents directory is now kept visible on desktop with sticky positioning.
- TOC area becomes scrollable if there are many `h2` headings.
- Added a right-side Tags module.
- Tags module is placed between the article directory and sidebar CTA card.
- CSS/JS cache-busting updated to `?v=1.5.1`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`


## v2.2.1 update

Blog detail sticky TOC fix:

- Fixed the right-side contents directory not staying visible while scrolling.
- Restored `overflow: visible` on the blog detail page ancestor containers because `overflow: hidden` can break `position: sticky`.
- Changed sticky behavior from the whole right sidebar to the TOC card itself.
- Tags and CTA modules remain below the TOC in normal flow.
- CSS/JS cache-busting updated to `?v=1.5.2`.


## v2.2.1 update

Blog detail sidebar behavior revised:

- Changed sticky behavior from only the TOC card to the entire right sidebar.
- The right column now moves as one group: Contents + Tags + CTA.
- The sidebar stops naturally when it reaches the bottom of the blog detail layout.
- Removed the visual overlap problem caused by the semi-transparent TOC card covering the modules below.
- Right-side cards are slightly more solid for better readability.
- CSS/JS cache-busting updated to `?v=1.5.3`.


## v2.2.1 update

Blog detail article typography update:

- Optimized article content CSS for common HTML tags.
- Added and styled examples for:
  - `h1` to `h6`
  - `p`
  - `ul`, `ol`, `li`
  - nested lists
  - `blockquote`
  - `table`, `thead`, `tbody`, `tr`, `th`, `td`
  - `code`, `pre`
  - `dl`, `dt`, `dd`
  - `figure`, `img`, `figcaption`
  - custom `div` blocks
- Made the article longer for better scrolling and sidebar testing.
- The right-side directory still only reads article `h2` tags.
- CSS/JS cache-busting updated to `?v=1.5.4`.


## v2.2.1 update

Blog detail article display and typography fix:

- Fixed the blog detail left content area staying hidden because of `.waco-reveal { opacity: 0; }`.
- Forced the main article card and right sidebar to remain visible on the blog detail page even if reveal JS fails or loads late.
- Reduced article heading sizes for `h2` through `h6`.
- Slightly refined paragraph and list spacing after reducing heading sizes.
- CSS/JS cache-busting updated to `?v=1.5.5`.


## v2.2.1 update

Blog detail TOC visual update:

- Optimized the right-side article directory into a timeline-style navigation.
- Added a vertical line on the left side of the TOC.
- Added a small dot before each auto-generated `h2` title.
- Active section now highlights the dot, connector and title state.
- Auto-generation logic is unchanged: the TOC still only reads article `h2` tags.
- CSS/JS cache-busting updated to `?v=1.5.6`.


## v2.2.1 update

Blog detail post-footer modules added:

- Added a left-column author box below the article content.
- Added Previous Article / Next Article navigation below the author box.
- Added an inline Recommended Reading module below the previous/next links.
- The recommended module is placed inside the left article column for a natural reading flow.
- Right sidebar contents, tags and CTA remain unchanged.
- CSS/JS cache-busting updated to `?v=1.5.7`.


## v2.2.1 update

This version adds the FAQ page:

- `faq.html`

FAQ page includes:

- 360px inner page banner with breadcrumb and page title.
- Help overview cards.
- FAQ keyword search.
- FAQ category filter buttons.
- Accordion question/answer list.
- Empty state when no matching FAQ is found.
- Side note card for additional support.
- CTA section.
- FAQ placeholder images in `assets/images/faq/`.
- CSS/JS cache-busting updated to `?v=1.6.0`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`


## v2.2.1 update

FAQ page revised:

- Removed the FAQ search box.
- Kept category filter buttons as the main FAQ navigation.
- Category buttons are centered on desktop.
- Ensured the first FAQ item is expanded by default.
- Added a safeguard so the first visible FAQ can stay open after category switching.
- CSS/JS cache-busting updated to `?v=1.6.1`.


## v2.2.1 update

This version adds the downloads/resource page:

- `downloads.html`

Downloads page includes:

- 360px inner page banner with breadcrumb and page title.
- Resource overview cards.
- Download category filter buttons.
- Download card list for catalogues, installation guides, colour cards, technical files and certificates.
- Side note card for requesting specific documents.
- File type explanation card.
- Empty state when no matching resources are found.
- CTA section.
- Download placeholder images in `assets/images/downloads/`.
- CSS/JS cache-busting updated to `?v=1.7.0`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`


## v2.2.1 update

This version adds the projects/case showcase page:

- `projects.html`

Projects page includes:

- 360px inner page banner with breadcrumb and page title.
- 3-column card-style project grid on desktop.
- Project category filter buttons.
- Clickable project cards.
- Modal popup for project details.
- Modal top area uses Swiper main carousel.
- Modal includes Swiper thumbnail carousel.
- Modal includes project meta, title and project introduction text.
- Project introduction content is prepared for short case descriptions.
- CTA section.
- Project placeholder images in `assets/images/projects/`.
- CSS/JS cache-busting updated to `?v=1.8.0`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`
- `projects.html`


## v2.2.1 update

Projects page modal UX fix:

- Project modal max width changed to `900px`.
- Close button now remains visible in the modal top-right area.
- Modal height is limited to the viewport.
- Gallery height is more compact.
- Project introduction area scrolls independently when the text is long.
- Modal content scroll position resets when opening a new case.
- CSS/JS cache-busting updated to `?v=1.8.1`.


## v2.2.1 update

Projects page revised:

- Added 3 additional project cards, increasing the project list to 9 items.
- Added a “Load More Projects” button.
- Default display: 6 project cards.
- Each click reveals 3 more matching project cards.
- Category filtering works together with Load More.
- Fixed insufficient vertical spacing between project card rows.
- Made project card body height more predictable to avoid row overlap.
- CSS/JS cache-busting updated to `?v=1.8.2`.


## v2.2.1 update

Projects page card grid fix:

- Fixed project card rows visually overlapping each other.
- Rebuilt the project grid with deterministic desktop row heights.
- Each project card now uses two fixed internal rows:
  - image area
  - text/content area
- Project card titles and descriptions are clamped to keep card heights consistent.
- Load More button now stays below the full grid instead of appearing between card rows.
- CSS/JS cache-busting updated to `?v=1.8.3`.


## v2.2.1 update

Projects page card content refinement:

- Removed the category tag label from project grid cards.
- Kept category tags inside the modal detail area.
- Reduced project card title font size.
- Project card title is limited to 2 lines.
- Project card description is limited to 2 lines.
- Reduced the large spacing between title and description.
- Slightly compacted card height after removing the tag label.
- CSS/JS cache-busting updated to `?v=1.8.4`.


## v2.2.1 update

Projects card compact layout test:

- Reduced the large blank area inside project cards.
- Reduced desktop project card height.
- Reduced project image height.
- Title remains limited to 2 lines.
- Description remains limited to 2 lines.
- Some project titles and descriptions were intentionally changed to 2-line examples for visual comparison.
- Project grid card tags remain hidden.
- CSS/JS cache-busting updated to `?v=1.8.5`.


## v2.2.1 update

Projects card auto-height fix:

- Removed the fixed desktop project card row height.
- Project cards now use auto height based on actual title and description content.
- Image area keeps a stable fixed height.
- Text area no longer keeps unnecessary blank space below the description.
- Project title remains limited to 2 lines.
- Project description remains limited to 2 lines.
- Project grid card tags remain hidden.
- CSS/JS cache-busting updated to `?v=1.8.6`.


## v2.2.1 update

Projects card equal row height fix:

- Project cards now keep content-based height while aligning card bottoms in the same row.
- CSS Grid uses `align-items: stretch` so the tallest card in each row defines the row height.
- Other cards in the same row stretch to 100% of that row height.
- Image area remains fixed height.
- Text area remains compact.
- Title remains limited to 2 lines.
- Description remains limited to 2 lines.
- On mobile, cards return to normal auto height.
- CSS/JS cache-busting updated to `?v=1.8.7`.


## v2.2.1 update

This version adds four WordPress-style utility/archive pages:

- `search.html`
- `404.html`
- `author.html`
- `tag.html`

Search page includes:

- 360px inner page banner.
- Search form.
- Result type filter buttons.
- Search result list.
- Sidebar summary and popular searches.
- Pagination.

404 page includes:

- Full-screen error layout.
- Large 404 number.
- Search form.
- Quick links.
- Home and product buttons.

Author page includes:

- Author archive banner.
- Author profile card.
- Author statistics.
- Author post grid.
- Pagination.

Tag page includes:

- Tag archive banner.
- Tag summary card.
- Tag chips.
- Tagged post grid.
- Pagination.

New image directory:

- `assets/images/archive/`

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`
- `projects.html`
- `search.html`
- `404.html`
- `author.html`
- `tag.html`


## v2.2.1 update

This version adds the contact page:

- `contact.html`

Contact page includes:

- 360px inner page banner with breadcrumb and page title.
- Contact intro section.
- Contact information cards.
- Inquiry form with the required fields:
  - Name
  - Phone
  - Email
  - Subject
  - Requirement Description
- Right-side support information.
- Business hours card.
- Map placeholder section.
- CTA section.
- Contact placeholder images in `assets/images/contact/`.
- Static demo submit behavior prepared for future WordPress / Contact Form 7 / backend integration.
- CSS/JS cache-busting updated to `?v=2.0.0`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`
- `projects.html`
- `search.html`
- `404.html`
- `author.html`
- `tag.html`
- `contact.html`


## v2.2.1 update

This version adds the About Us page:

- `about.html`

About page includes:

- 360px inner page banner with breadcrumb and page title.
- Company profile / story section.
- Data strength section with number rolling animation.
- Product advantages section with 4 selling point cards.
- Each advantage card includes an icon.
- Advantage icons have a subtle floating animation.
- Advantage cards use reveal animation and staggered appearance.
- “Why Choose Us” interaction:
  - Left side has 4 reasons.
  - First reason is open by default.
  - Other reasons show title only by default.
  - Clicking another reason closes the previous description.
  - Right-side image switches to the selected reason.
- Customer testimonial Swiper:
  - 3 columns on desktop.
  - 2 columns on tablet.
  - 1 column on mobile.
  - Pagination and arrows.
- CTA section.
- About placeholder images in `assets/images/about/`.
- CSS/JS cache-busting updated to `?v=2.1.0`.

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`
- `projects.html`
- `search.html`
- `404.html`
- `author.html`
- `tag.html`
- `contact.html`
- `about.html`


## v2.2.1 update

This version adds the product comparison page:

- `compare.html`

Compare page includes:

- 360px inner page banner with breadcrumb and page title.
- Before / After draggable comparison sliders.
- Each slider has a center draggable divider line.
- Each compare module includes a content area below:
  - title
  - description

Current compare groups:

1. Installation Before / After
2. Normal Wood / WPC
3. Old Ground / Renovated

New image directory:

- `assets/images/compare/`

Current pages included:

- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`
- `projects.html`
- `search.html`
- `404.html`
- `author.html`
- `tag.html`
- `contact.html`
- `about.html`
- `compare.html`


## v2.2.1 update

GitHub preview entry page added:

- `index.html`

Purpose:

- Works as the GitHub Pages preview homepage.
- Lists and links to all completed HTML template pages.
- Groups pages by purpose:
  - Core brand pages
  - WooCommerce/shop pages
  - Blog/content pages
  - Resource and interaction pages
  - WordPress utility templates
- Uses only inline CSS inside `index.html`.
- Does not load the shared theme stylesheet, preventing preview-page CSS from affecting other pages.
- Added `.nojekyll` for GitHub Pages compatibility.

Current pages included:

- `index.html`
- `home.html`
- `products.html`
- `product-detail.html`
- `product-detail-legacy.html`
- `blog.html`
- `blog-detail.html`
- `faq.html`
- `downloads.html`
- `projects.html`
- `search.html`
- `404.html`
- `author.html`
- `tag.html`
- `contact.html`
- `about.html`
- `compare.html`
