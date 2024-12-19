import { Text, View, ImageBackground, TouchableOpacity } from "react-native";

export function Home() {
   const wallpaperImage = {
      factions: require("public/imgs/wallpaper/warhammer-40k-factions.jpg"),
      lore: require("public/imgs/wallpaper/warhammer-40k-lore.jpg"),
      battles: require("public/imgs/wallpaper/warhammer-40k-battles.jpg"),
      galaxy: require("public/imgs/wallpaper/warhammer-40k-galaxy.jpg"),
   }

   return (
      <View className="flex-1 bg-black">
         {/* Header */}
         <View className="w-full bg-[#111827] p-2 flex items-center">
            <Text className="text-white font-bold text-2xl">Warhammer 40K</Text>
            <Text className="text-white text-lg">Lore Compendium</Text>
         </View>

         {/* Content */}
         <View className="flex-1 bg-black">
            <View className="bg-[#1F2937] m-4 p-4 rounded-lg">
               <Text className="text-white text-xl font-bold">Welcome, Battle-Brother</Text>
               <Text className="text-white mt-2 text-justify text-sm">
                  Dive into the grim darkness of the far future. Explore the vast lore, mighty factions, and epic battles of Warhammer 40.000.
               </Text>
            </View>
            <Text className="text-white text-2xl font-bold pt-5 pl-5 pb-3">Explore the Galaxy</Text>
            {[
               { title: "Factions", link: "/factions", wallpaper: wallpaperImage.factions },
               { title: "Lore", link: "/lore", wallpaper: wallpaperImage.lore },
               { title: "Battles", link: "/battles", wallpaper: wallpaperImage.battles },
               { title: "Galaxy Map", link: "/map", wallpaper: wallpaperImage.galaxy },
            ].map((item) => (
               <ImageBackground
                  key={item.title}
                  source={item.wallpaper}
                  resizeMode="cover"
                  style={{
                     borderRadius: 15
                  }}
                  className="bg-[#1F2937] mb-4 mx-5 p-7 rounded-lg flex items-center bg-factions bg-cover overflow-hidden opacity-90"
               >
                  <Text className="text-white font-bold text-2xl">{item.title}</Text>
               </ImageBackground>
            ))}
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