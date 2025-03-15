import { ImageBackground, Image, Text, View } from "react-native";
import { images } from "@/constants/images";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  if (focused)
    return (
      <ImageBackground
        source={images.highlight}
        className="mt-4 flex w-full min-w-[112px] flex-1 flex-row items-center justify-center overflow-hidden rounded-full"
        style={{ minHeight: 52 }}
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="ml-2 text-base font-semibold text-secondary">
          {title}
        </Text>
      </ImageBackground>
    );

  return (
    <View className="mt-4 size-full items-center justify-center rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

export default TabIcon;
