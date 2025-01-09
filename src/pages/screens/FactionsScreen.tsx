import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageBackground, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { RootStackParamList } from "~/types";

type Props = NativeStackScreenProps<RootStackParamList, "Factions">;

export function FactionsScreen({ navigation }: Props) {
   const factionsWallpaper = {
      imperium: require("public/imgs/factions/factionsWallpaper/factions-imperiumofman.png"),
      caos: require("public/imgs/factions/factionsWallpaper/factions-caos.png"),
      necrons: require("public/imgs/factions/factionsWallpaper/factions-necrons.png"),
      orks: require("public/imgs/factions/factionsWallpaper/factions-orks.png"),
      tau: require("public/imgs/factions/factionsWallpaper/factions-tauempire.png"),
      tyranids: require("public/imgs/factions/factionsWallpaper/factions-tyranids.png"),
      aeldari: require("public/imgs/factions/factionsWallpaper/factions-aeldari.png"),
      oldones: require("public/imgs/factions/factionsWallpaper/factions-oldones.png"),
      ctan: require("public/imgs/factions/factionsWallpaper/factions-ctan.png"),
   };

   return (
      <View className="flex-1 bg-black">
         <View className="flex-1">
            <ScrollView className="flex-1 p-5 mb-14">
               {[
                  { title: "Imperium of Man", link: "ImperiumOfMan", wallpaper: factionsWallpaper.imperium },
                  { title: "Caos", link: "Caos", wallpaper: factionsWallpaper.caos },
                  { title: "Tyranids", link: "Tyranids", wallpaper: factionsWallpaper.tyranids },
                  { title: "Orks", link: "Orks", wallpaper: factionsWallpaper.orks },
                  { title: "Aeldari", link: "Aeldari", wallpaper: factionsWallpaper.aeldari },
                  { title: "Necrons", link: "Necrons", wallpaper: factionsWallpaper.necrons },
                  { title: "T'au Empire", link: "T'au Empire", wallpaper: factionsWallpaper.tau },
                  { title: "C'tan", link: "C'tan", wallpaper: factionsWallpaper.ctan },
                  { title: "Old ones", link: "Old ones", wallpaper: factionsWallpaper.oldones },
               ].map((item) => (
                  <TouchableOpacity
                     onPress={() => navigation.navigate(item.link as keyof RootStackParamList)}
                     key={item.title}
                  >
                     <ImageBackground
                        key={item.title}
                        source={item.wallpaper}
                        resizeMode="cover"
                        style={{
                           borderRadius: 15,
                        }}
                        className="bg-[#1F2937] mb-4 rounded-lg flex items-center bg-factions bg-cover overflow-hidden opacity-90"
                     >
                        <View className="bg-black/40 mx-5 p-7 w-full rounded-md">
                           <Text className="text-white font-bold text-2xl text-center tracking-widest">
                              {item.title}
                           </Text>
                        </View>
                     </ImageBackground>
                  </TouchableOpacity>
               ))}
            </ScrollView>
         </View>
      </View>
   );
}
