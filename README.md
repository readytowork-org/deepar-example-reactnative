# React Native DeepAR SDK example

**[This example is outdated since it uses the older DeepAR SDK and it does not run out of the box. We've kept it here as a reference how one could use RN native components to integrate DeepAR. We accept pull-requests for updating to latest DeepAR version.]**

To run the example
* In the root folder:
    - First install all the dependencies with: npm install
    - Install pods for iOS: cd ios; pod update; pod install; cd..;

* Download the SDK from https://developer.deepar.ai for both iOS and Android and:
    - Drag and drop the DeepAR.framework to your native iOS project. In the project settings General->Frameworks, Libraries and Embedded Content make sure the DeepAR.framework is listed and Embed option is set  to "Embed & Sign". For any issues consult native iOS integration documentation.
    - For Android follow the instructions on how to embed the DeepAR SDK into native apps. The workflow is the same:
        + Open the example-reactnative/android project in Android Studio
        + File->Project Structure->Dependencies->Add new (+ sign)->Import .JAR/.AAR Package
        + Select deepar.aar and finish the import
        + Sync gradle to make sure everything is ok

* Go to https://developer.deepar.ai, sign up, create the project and the Android and iOS apps. Copy the license key and paste it to:
    - Android -  RNTDeepAR.java (instead of your_licence_key_here string). Additionally change your applicationId in the application build.gradle file to the one you've set in the developer portal for Android app
    - iOS - RNTDeepAR.m (insted of your_licence_key_here string). Additionally change your bundle identifier in the project settings Signing & Capabilities section to the one you've set in the  developer portal for iOS app

* To run on iOS:
    - Connect your phone to your Mac.
    - Open ios/deeparRNExample.xcworkspace 
    - Run the project in the xCode

* To run on Android:
    - Connect Android phone to the computer
    - In the root folder run 'react-native run-android'

* This example has been done with RN version 0.61.2. Depending on your RN version some things may differ slightly - for example if you are running on RN < 0.60 you will need to link the dependencies manually etc. Make sure to understand RN native component management for both iOS and Android platforms:
    - https://reactnative.dev/docs/native-components-ios
    - https://reactnative.dev/docs/native-components-android

