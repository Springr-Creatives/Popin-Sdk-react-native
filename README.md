Here’s an example README with instructions for setting up and using your `react-native-popin-call` library, including permission setup for iOS and Android.

```markdown
# react-native-popin-call

A React Native library to enable video calls in your app using WebView. Users can initialize the SDK by passing in `token`, `name`, and `mobile` parameters.

Name and mobile parameters are for identifying customers and token will be available in your popin dashboard.

## Installation

1. **Install the Library**
   Use yarn to add the library to your project:
   ```bash
   yarn add react-native-popin-call
   ```

2. **Install Required Dependencies**
   This library requires `react-native-webview` and `react-native-permissions`:
   ```bash
   yarn add react-native-webview react-native-permissions
   npx pod-install
   ```

## Usage

After installing, you can import and use the `VideoCallWebView` component to load your video call interface. Pass in `token`, `name`, and `mobile` as props, which will dynamically construct the URL for the call.

```javascript
import React from 'react';
import { VideoCallWebView } from 'react-native-popin-call';

const App = () => (
  <VideoCallWebView
    token="your_token_here"
    name="customer_name_here"
    mobile="customer_mobile_number_here"
  />
);

export default App;
```

## Permissions

### iOS

For iOS, you need to add permissions for camera and microphone access in the `Info.plist` file. This allows the video call interface to access these resources during a call.

1. Open your iOS project in Xcode.
2. In the `Info.plist` file, add the following entries:

```xml
<key>NSCameraUsageDescription</key>
<string>This app requires access to the camera for video calls.</string>
<key>NSMicrophoneUsageDescription</key>
<string>This app requires access to the microphone for video calls.</string>
```

### Android

For Android, add permissions in your `AndroidManifest.xml` file to allow access to the camera and microphone.

1. Open `android/app/src/main/AndroidManifest.xml`.
2. Add the following permissions:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

The library handles requesting these permissions automatically when initialized.

## Handling Permissions

The `VideoCallWebView` component will check and request permissions when initialized. If permissions are denied, an alert will be shown to the user indicating the requirement for camera and microphone access.

---

With these steps, your `react-native-popin-call` library should be ready for use, allowing for a seamless video call experience within any React Native project.
```

This README provides clear setup instructions, permission requirements for both iOS and Android, and basic usage for users of the library. Let me know if you’d like additional customization or examples!
