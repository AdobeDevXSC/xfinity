import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PromoBanner from "./src/components/PromoBanner";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: '100%', width: '100%', padding: 16}}>
        <PromoBanner />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}