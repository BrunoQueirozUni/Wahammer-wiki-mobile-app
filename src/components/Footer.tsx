import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationProps, RootStackParamList } from "~/types";

export function Footer() {
   const navigation = useNavigation<NavigationProps>();

   return (
      <View className="w-full bg-[#111827] p-2 flex flex-row items-center justify-around absolute bottom-0">
         {[
            { title: "Home", link: "Home" },
            { title: "Factions", link: "Factions" },
            { title: "Lore", link: "Lore" },
            { title: "Battles", link: "Battles" },
            { title: "Map", link: "Map" },
         ].map((item) => (
            <TouchableOpacity
               key={item.title}
               onPress={() =>
                  navigation.reset({
                     index: 0, // Define qual rota será exibida
                     routes: [{ name: item.link as keyof RootStackParamList }],
                  })
               }
            >
               <View>
                  <Text className="text-white">{item.title}</Text>
               </View>
            </TouchableOpacity>
         ))}
      </View>
   );
}
