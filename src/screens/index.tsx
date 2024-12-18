import { Text, View, TextInput, TouchableOpacity, Image, Button } from "react-native";

export function Home() {
   return (
      <View className="bg-black">
         <View className="w-full bg-[#111827] p-2 flex items-center">
            <Text className="text-white font-bold text-2xl">Warhammer 40K</Text>
            <Text className="text-white text-lg">Lore Compendium</Text>
         </View>
         <View className="bg-black h-full">
            <View className="bg-[#1F2937] m-4 p-4 rounded-lg">
               <Text className="text-white text-xl font-bold">Welcome, Battle-Brother</Text>
               <Text className="text-white mt-2 text-justify">Dive into the grim darkness of the far future. Explore the vast lore, mighty factions, and epic battlers of warhammer 40.000.</Text>
            </View>
            <Text className="text-white text-2xl font-bold pt-5 pl-5 pb-3">Explore the Galaxy</Text>
            {[
               { title: "Factions", link: "/factions" },
               { title: "Lore", link: "/lore" },
               { title: "Battles", link: "/battles" },
               { title: "Galaxy Map", link: "/map" },
            ].map((item) => (
               <View key={item.title}>
                  <View className="bg-[#1F2937] mb-4 mx-5 p-8 rounded-lg flex items-center">
                     <Text className="text-white">{item.title}</Text>
                  </View>
               </View>
            ))}
         </View>
      </View>
   );
}

// <Image source={require("public/imgs/warhammer.png")} className="w-[170px] h-10" />