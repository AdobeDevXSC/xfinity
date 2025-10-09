// src/utils/parseBanner.js
export function parsePromoBannerData(data) {
  if (!data) return null;

  /* contains hardcoded urls for demo purposes */
  try {
    const imageDesktop =
      data?.content?.[0]?.section?.[0]?.[0]?.content?.[0]?.[0]?.[0]?.src;
    const imageMobile =
      data?.content?.[0]?.section?.[0]?.[0]?.content?.[1]?.[0]?.[0]?.src;
    const block =
      data?.content?.[0]?.section?.[0]?.[0]?.content?.[2]?.[0] || {};
    const heading = block?.[0]?.text || "Promotion";
    const listItems = block?.[1]?.items || [];
    const price = block?.[2]?.text || "";
    const paragraph = block?.[3]?.content || [];
    const legalCopyText = data?.content?.[0]?.section?.[0]?.[0]?.content?.[3]?.[0]?.[0]?.text || "";

    const shopOfferLink =
      paragraph?.[0]?.content?.[0]?.href ||
      "https://www.xfinity.com/digital/offers";
    const shopOfferText =
      paragraph?.[0]?.content?.[0]?.text || "Shop offer";
    const otherInfoLink = paragraph?.[1]?.href;
    const otherInfoText = paragraph?.[1]?.text;

    return {
      imageDesktop,
      imageMobile,
      heading,
      listItems,
      price,
      legalCopyText,
      shopOfferLink,
      shopOfferText,
      otherInfoLink,
      otherInfoText,
    };
  } catch (e) {
    console.error("Error parsing promo banner data:", e);
    return null;
  }
}
