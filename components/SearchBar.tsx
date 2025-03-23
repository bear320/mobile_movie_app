import { View, Image, TextInput } from "react-native";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center rounded-full bg-dark-200 px-5 py-4">
      <Image
        source={icons.search}
        className="h-5 w-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        value=""
        placeholder={placeholder}
        placeholderTextColor="#A8B5DB"
        onPress={onPress}
        onChangeText={() => {}}
        className="ml-2 flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
