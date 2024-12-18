import { Text, View, ImageBackground, TouchableOpacity } from "react-native";

export function Home() {
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
               { title: "Factions", link: "/factions" },
               { title: "Lore", link: "/lore" },
               { title: "Battles", link: "/battles" },
               { title: "Galaxy Map", link: "/map" },
            ].map((item) => (
               <ImageBackground 
                  key={item.title}
                  source={require("public/imgs/imperium.png")}
                  resizeMode="cover"
                  className="flex-1"
               >
                  <View className="bg-[#1F2937] mb-4 mx-5 p-8 rounded-lg flex items-center bg-factions bg-cover">
                     <Text className="text-white">{item.title}</Text>
                  </View>
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
