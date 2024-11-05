// src/VideoCallWebView.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

interface VideoCallWebViewProps {
  token: string;
  name: string;
  mobile: string;
  onMessage?: (message: string) => void;
}

const VideoCallWebView: React.FC<VideoCallWebViewProps> = ({
  token,
  name,
  mobile,
  onMessage,
}) => {
  const [hasPermissions, setHasPermissions] = useState(false);

  // Construct the URL dynamically based on the props passed
  const url = useMemo(() => {
    return `https://widget01.popin.to/standalone?token=${token}&popin=open&name=${encodeURIComponent(name)}&mobile=${encodeURIComponent(mobile)}`;
  }, [token, name, mobile]);

  // Check and request permissions
  useEffect(() => {
    const requestPermissions = async () => {
      const cameraStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      const microphoneStatus = await check(PERMISSIONS.ANDROID.RECORD_AUDIO);

      if (
        cameraStatus === RESULTS.GRANTED &&
        microphoneStatus === RESULTS.GRANTED
      ) {
        setHasPermissions(true);
      } else {
        const cameraRequest = await request(PERMISSIONS.ANDROID.CAMERA);
        const microphoneRequest = await request(
          PERMISSIONS.ANDROID.RECORD_AUDIO
        );
        if (
          cameraRequest === RESULTS.GRANTED &&
          microphoneRequest === RESULTS.GRANTED
        ) {
          setHasPermissions(true);
        } else {
          Alert.alert(
            'Permissions Required',
            'Camera and microphone permissions are required for video calls.'
          );
        }
      }
    };

    requestPermissions();
  }, []);

  if (!hasPermissions) {
    return <Text>Camera and microphone permission required.</Text>;
  }

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{ uri: url }}
        onMessage={(event) => {
          if (onMessage) {
            onMessage(event.nativeEvent.data);
          }
        }}
        javaScriptEnabled
        domStorageEnabled
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: '100%',
    height: '100%',
  },
});

export default VideoCallWebView;
