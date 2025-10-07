import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PromoBanner from "./src/components/PromoBanner";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
        <PromoBanner />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}