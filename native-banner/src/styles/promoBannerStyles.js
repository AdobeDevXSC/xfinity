import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* Container */
  promotion: {
    overflow: "auto",
    maxWidth: 1440,
    height: '100%',
    width: '100%',
    marginVertical: 0,
    marginHorizontal: "auto",
  },
  promotionDesktop: {
    position: "relative",
  },

  /* Image background */
  imageBackground: {
    width: "100%",
    height: "fit-content", // ensures visible area
    justifyContent: "flex-end",
  },
  imageBackgroundDesktop: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  imageDesktop: {
    resizeMode: "cover",
  },
  imageMobile: {
    display: 'block',
    height: 200,
    borderRadius: 8,
  },
  imageMobileDesktop: { 
    display: 'none',
  },

  /* Content container */
  contentContainer: {
    backgroundColor: "#f6f6f9",
    padding: 24,
  },
  contentContainerDesktop: {
    backgroundColor: "transparent",
    maxWidth: 625,
    padding: 64,
    zIndex: 1,
  },

  /* Text */
  h3: {
    fontSize: 36,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 16,
    maxWidth: 400,
  },
  h3Desktop: {
    color: "#fff",
  },

  ul: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  h4: {
    fontSize: 20,
    color: "#000",
    lineHeight: 24,
    marginBottom: 4,
    fontWeight: "bold",
  },
  h4Desktop: {
    color: "#fff",
  },

  h2: {
    fontSize: 34,
    fontWeight: "900",
    color: "#000",
    paddingVertical: 16,
  },
  h2Desktop: {
    color: "#fff",
    fontSize: 48,
  },
  h2Sub: {
    fontSize: 24,
    fontWeight: "400",
    paddingLeft: 10,
  },

  linkGroup: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 24,
    marginBottom: 16,
    marginTop: 16,
  },
  primaryButton: {
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 28,
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryButtonDesktop: {
    color: "#000",
    backgroundColor: "rgb(246,246,249)",
  },
  secondaryLink: {
    color: "#000",
    fontSize: 16,
  },
  secondaryLinkDesktop: {
    color: "#fff",
  },

  finePrint: {
    fontSize: 12,
    color: "#000",
    marginTop: 12,
  },
  finePrintDesktop: {
    color: "#fff",
  },

  /* Loader */
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
