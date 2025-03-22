import { Image, ScrollView, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        className="flex-1 px-5"
      >
        <Image source={icons.logo} className="mx-auto mb-5 mt-20 h-10 w-12" />

        <View className="mt-5 flex-1">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
}
