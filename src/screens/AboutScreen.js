import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Привет, это приложение для добавления заметок (что-то на подобии блога)!</Text>
      <Text style={styles.text}>Это всего лишь мое второе приложение (первое был Todo list), но я не стою на месте!)</Text>
      <Text style={styles.text}>P.S.Я еще практикуюсь и осваиваю для себя новую технологию (Это приложение написано на React Native).</Text>
      <Text style={styles.text}>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О приложении',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    marginBottom: 5
  },
  version: {
    fontFamily: 'open-bold'
  }
})
