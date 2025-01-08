import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Components
import { Footer } from "~/components/Footer";

// Navigation
import { FactionsStackParamList, RootStackParamList } from "~/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// Páginas Principais
import { Home } from "../pages/home";
import { MapScreen } from "../pages/screens/MapScreen";
import { LoreScreen } from "../pages/screens/LoreScreen";
import { BattlesScreen } from "../pages/screens/BattlesScreen";
import { FactionsScreen } from "../pages/screens/FactionsScreen";

// Páginas Factions
import { ImperiumOfMan } from "~/pages/screens/factions/ImperiumOfMan";

const Stack = createNativeStackNavigator<RootStackParamList>();
const FactionsPages = createNativeStackNavigator<FactionsStackParamList>();

export function AppRoutes() {
   return (
      <NavigationContainer>
         <View style={{ flex: 1 }}>
            {/* Header */}
            <Stack.Navigator
               initialRouteName="Home"
               screenOptions={{
                  header: ({ navigation, route }) => {
                     const canGoBack = navigation.canGoBack(); // Verifica se é possível voltar
                     return (
                        <View className="w-full bg-[#111827] p-2 flex items-center relative">
                           {/* Botão de voltar */}
                           {canGoBack && (
                              <TouchableOpacity
                                 onPress={() => navigation.goBack()}
                                 className="absolute left-5 top-2"
                              >
                                 <Text className="text-white text-lg">{"<"}</Text>
                              </TouchableOpacity>
                           )}

                           {/* Conteúdo do Header */}
                           <View className="flex items-center p-2">
                              <TouchableOpacity onPress={() => navigation.replace(route.name)}>
                                 <Text className="text-white font-bold text-2xl">
                                    {route.name !== "Home" ? route.name : "Warhammer 40K"}
                                 </Text>
                              </TouchableOpacity>
                              {route.name === "Home" && (
                                 <Text className="text-white text-lg">
                                    Grim Darkness of the far future
                                 </Text>
                              )}
                           </View>
                        </View>
                     );
                  },
               }}
            >
               {/* Páginas Principais */}
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Factions" component={FactionsPage} />
               <Stack.Screen name="Lore" component={LoreScreen} />
               <Stack.Screen name="Battles" component={BattlesScreen} />
               <Stack.Screen name="Map" component={MapScreen} />
            </Stack.Navigator>

            {/* Footer */}
            <Footer />
         </View>
      </NavigationContainer>
   );
}

export function FactionsPage() {
   return (
      <FactionsPages.Navigator
         screenOptions={{
            headerShown: true,
            header: ({ route }) => (
               <CustomHeader title={route.name === "FactionsScreen" ? "Factions" : route.name} />
            ), // Substitui o header padrão
         }}
      >
         <FactionsPages.Screen 
            options={{ headerShown: false }}
            name="FactionsScreen" 
            component={FactionsScreen} 
         />
         <FactionsPages.Screen 
            name="ImperiumOfMan" 
            component={ImperiumOfMan} 
         />
         {/* Adicione outras subpáginas aqui */}
      </FactionsPages.Navigator>
   );
}

// Header Customizado
function CustomHeader({ title }: { title: string }) {
   const navigation = useNavigation();

   return (
      <View className="flex-row items-center p-4 bg-black">
         {/* Botão de voltar */}
         <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
            <Text className="text-white text-lg">←</Text>
         </TouchableOpacity>
         {/* Título */}
         <Text className="text-white text-xl font-bold">{title}</Text>
      </View>
   );
}