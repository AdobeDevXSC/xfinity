import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  useWindowDimensions,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { fetchPromoBannerData } from "../api/fetchPromoBanner";
import { parsePromoBannerData } from "../utils/parsePromoBanner";
import styles from "../styles/promoBannerStyles";
import { EDGE_SITE } from "../config/env";

export default function PromoBanner() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  useEffect(() => {
    async function loadBanner() {
      try {
        const rawData = await fetchPromoBannerData();
        const parsed = parsePromoBannerData(rawData);
        setBanner(parsed);
      } catch (e) {
        console.error("Failed to load banner:", e);
      } finally {
        setLoading(false);
      }
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
    <View style={[styles.promotion, isDesktop && styles.promotionDesktop]}>
      <ImageBackground
        source={{ uri: `${EDGE_SITE}${banner.imageDesktop}` }}
        style={[styles.imageBackground, isDesktop && styles.imageBackgroundDesktop]}
        imageStyle={[styles.image, isDesktop && styles.imageDesktop]}
      >
        {banner.imageMobile && (
          <Image
            source={{ uri: `${EDGE_SITE}${banner.imageMobile}` }}
            style={[styles.imageMobile, isDesktop && styles.imageMobileDesktop]}
          ></Image>
        )}
        
        <ScrollView
          contentContainerStyle={[
            styles.contentContainer,
            isDesktop && styles.contentContainerDesktop,
          ]}
          showsVerticalScrollIndicator={false}
        >

          {banner.heading && (
            <Text style={[styles.h3, isDesktop && styles.h3Desktop]}>
              {banner.heading}
            </Text>
          )}

          {banner.listItems?.length > 0 && (
            <View style={styles.ul}>
              {banner.listItems.map((item, i) => (
                <Text key={i} style={[styles.h4, isDesktop && styles.h4Desktop]}>
                  • {item.text}
                </Text>
              ))}
            </View>
          )}

          {banner.price && (
            <Text style={[styles.h2, isDesktop && styles.h2Desktop]}>
              {banner.price}
              <Text style={styles.h2Sub}>
                {banner.priceSub}
              </Text>
            </Text>
          )}

          <View style={styles.linkGroup}>
            {banner.shopOfferLink && (
              <TouchableOpacity onPress={() => Linking.openURL(banner.shopOfferLink)}>
                <Text style={[styles.primaryButton, isDesktop && styles.primaryButtonDesktop]}>
                  {banner.shopOfferText}
                </Text>
              </TouchableOpacity>
            )}

            {banner.otherInfoLink && (
              <TouchableOpacity onPress={() => Linking.openURL(banner.otherInfoLink)}>
                <Text style={[styles.secondaryLink, isDesktop && styles.secondaryLinkDesktop]}>
                  {banner.otherInfoText}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {banner.legalCopyText && (
            <Text style={[styles.legalCopy, isDesktop && styles.legalCopyDesktop]}>
              {banner.legalCopyText}
            </Text>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
