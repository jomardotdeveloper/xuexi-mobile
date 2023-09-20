import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const webViewRef = useRef(null);

  const goBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.backButton}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://sound-illegally-maggot.ngrok-free.app/end/elogin' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    backgroundColor: 'lightgray',
  },
  backButton: {
    fontSize: 18,
    color: 'blue',
  },
});
