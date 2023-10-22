import React, { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
 

const App = () => {
  const webViewRef = useRef(null);
  useEffect(() => {
    // const Tts = new Tts();
    // Tts.setDefaultLanguage('en-IE');
    // Tts.addEventListener('tts-start', event => console.log('start', event));
    // Tts.addEventListener('tts-finish', event => console.log('finish', event));
    // Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    // Tts.stop();
    // Tts.speak('Hello, world!');
    console.log("TEST");
    // console.log(Tts);

    const backAction = () => {
      console.log("TEST");
      if (webViewRef.current) {
        // Check if WebView can go back
        webViewRef.current.goBack();
        return true;
      }

      // If WebView cannot go back, prevent the app from exiting
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Invoke getPusher() function when the component is mounted
    // Clean up the event listener and Pusher connection when the component unmounts
    return () => {
      backHandler.remove();
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render


  const onShouldStartLoadWithRequest = (event) => {
    // This function will be called when the WebView is about to load a new URL
    // You can use this to prevent certain URLs from loading if needed

    // In this example, we allow all URLs to load
    return true;
  };

  const handleMessage = (event) => {
    const messageFromWeb = event.nativeEvent.data;
    // Handle the message received from the web content
    // console.table([messageFromWeb]);
    console.log(event);
    // console.log('Message from web:', messageFromWeb);
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'https://legible-ladybird-reasonably.ngrok-free.app/end/elogin' }}
      style={{ flex: 1, marginTop: 20 }}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      onMessage={(event) => {
        alert(event.nativeEvent.data);
      }}
    />
  );
};

export default App;
