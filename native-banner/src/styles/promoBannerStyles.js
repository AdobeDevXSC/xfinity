// src/styles/bannerStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  banner: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "column",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: "#374151",
  },
  price: {
    fontSize: 20,
    fontWeight: "800",
    color: "#007AFF",
    marginVertical: 8,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 6,
  },
  link: {
    color: "#007AFF",
    fontWeight: "600",
  },
  finePrint: {
    fontSize: 12,
    color: "#6B7280",
  },
  closeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    color: "#9CA3AF",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
