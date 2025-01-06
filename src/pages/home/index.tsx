import { RootStackParamList } from "~/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text, View, ImageBackground, TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home({ navigation }: Props) {
   const wallpaperImage = {
      factions: require("public/imgs/wallpaper/warhammer-40k-factions.jpg"),
      lore: require("public/imgs/wallpaper/warhammer-40k-lore.jpg"),
      battles: require("public/imgs/wallpaper/warhammer-40k-battles.jpg"),
      galaxy: require("public/imgs/wallpaper/warhammer-40k-galaxy.jpg"),
   }

   return (
      <View className="flex-1 bg-black">
         {/* Content */}
         <View className="flex-1 bg-black">
            <View className="bg-[#1F2937] m-4 p-4 rounded-lg">
               <Text className="text-white text-xl font-bold">Welcome, Battle-Brother</Text>
               <Text className="text-white mt-2 text-justify text-sm">
                  Dive into the grim darkness of the far future. Explore the vast lore, mighty factions, and epic battles of Warhammer 40.000.
               </Text>
            </View>
            <Text className="text-white text-2xl font-bold pt-5 pl-5">Explore the Galaxy</Text>
            <View className="p-4">
               {[
                  { title: "Factions", link: "Factions", wallpaper: wallpaperImage.factions },
                  { title: "Lore", link: "Lore", wallpaper: wallpaperImage.lore },
                  { title: "Battles", link: "Battles", wallpaper: wallpaperImage.battles },
                  { title: "Galaxy Map", link: "Map", wallpaper: wallpaperImage.galaxy },
               ].map((item) => (
                  <TouchableOpacity onPress={() => navigation.navigate(item.link as keyof RootStackParamList)} key={item.title}>
                     <ImageBackground
                        key={item.title}
                        source={item.wallpaper}
                        resizeMode="cover"
                        style={{
                           borderRadius: 15
                        }}
                        className="bg-[#1F2937] mb-4 rounded-lg flex items-center bg-factions bg-cover overflow-hidden opacity-90"
                     >
                        <View className="bg-black/50 mx-5 p-7 w-full rounded-md">
                           <Text className="text-white font-bold text-2xl text-center tracking-widest">{item.title}</Text>
                        </View>
                     </ImageBackground>
                  </TouchableOpacity>
               ))}
            </View>
         </View>

         {/* Footer */}
         <View className="w-full bg-[#111827] p-2 flex flex-row items-center justify-around absolute bottom-0">
            <TouchableOpacity>
               <Text className="text-white text-sm">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text className="text-white text-sm">Lore</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text className="text-white text-sm">Battle</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <Text className="text-white text-sm">Map</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}