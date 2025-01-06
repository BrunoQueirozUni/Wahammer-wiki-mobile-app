import * as React from "react"
import { Text, TouchableOpacity, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "~/types"

import { Home } from "../pages/home"
import { FactionsScreen } from "../pages/screens/FactionsScreen"
import { LoreScreen } from "../pages/screens/LoreScreen"
import { BattlesScreen } from "../pages/screens/BattlesScreen"
import { MapScreen } from "../pages/screens/MapScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()

function SubPages() {
   return (
      <></>
   )
}

export function AppRoutes() {
   return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={
            {
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
                        <Text className="text-white font-bold text-2xl">{route.name !== "Home" ? route.name : "Warhammer 40K"}</Text>
                        {
                           route.name == "Home" ? (
                              <Text className="text-white text-lg">Grim Darkness of the far future</Text>
                           ) : null
                        }
                     </View>
                   </View>
                 );
               },
            }
          }>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Factions" component={FactionsScreen} />
            <Stack.Screen name="Lore" component={LoreScreen} />
            <Stack.Screen name="Battles" component={BattlesScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
          </Stack.Navigator>
      </NavigationContainer>
   )
}