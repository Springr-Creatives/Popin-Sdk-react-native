import { StyleSheet, View } from 'react-native';
import { VideoCallWebView } from 'react-native-popin-call';
export default function App() {
  return (
    <View style={styles.container}>
      <VideoCallWebView token="11466" name="tester" mobile="9876543210" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
