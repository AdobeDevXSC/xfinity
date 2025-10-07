import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";
import { fetchPromoBannerData } from "../api/fetchPromoBanner";
import { parsePromoBannerData } from "../utils/parsePromoBanner";
import styles from "../styles/promoBannerStyles";

export default function PromoBanner() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBanner() {
      const rawData = await fetchPromoBannerData();
      const parsed = parsePromoBannerData(rawData);
      setBanner(parsed);
      setLoading(false);
    }
    loadBanner();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!banner) return null;

  return (
    <View style={styles.banner}>
      {banner.image && (
        <Image
          source={{ uri: banner.image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <View style={styles.textContainer}>
        <Text style={styles.heading}>{banner.heading}</Text>

        {banner.listItems.map((item, i) => (
          <Text key={i} style={styles.listItem}>
            • {item.text}
          </Text>
        ))}

        <Text style={styles.price}>{banner.price}</Text>

        <View style={styles.links}>
          <TouchableOpacity
            onPress={() => Linking.openURL(banner.shopOfferLink)}
          >
            <Text style={styles.link}>{banner.shopOfferText}</Text>
          </TouchableOpacity>

          {banner.otherInfoLink && (
            <TouchableOpacity
              onPress={() => Linking.openURL(banner.otherInfoLink)}
            >
              <Text style={styles.link}> {banner.otherInfoText}</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.finePrint}>{banner.finePrint}</Text>
      </View>
    </View>
  );
}
