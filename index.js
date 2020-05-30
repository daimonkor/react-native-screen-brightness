import {NativeModules, Platform} from 'react-native';

export default NativeModules.ScreenBrightness;

const oldHasPermission = NativeModules.ScreenBrightness.hasPermission

NativeModules.ScreenBrightness.hasPermission = async () => {
    console.log("modified check permission")
    if (Platform.OS === "android") {
        return oldHasPermission();
    }
    else{
        return Promise.resolve(true)
    }
}

const oldGetScreenBrightnessMode = NativeModules.ScreenBrightness.getScreenBrightnessMode

NativeModules.ScreenBrightness.getScreenBrightnessMode = async () => {
    console.log("modified getScreenBrightnessMode")
    if (Platform.OS === "android") {
        return oldGetScreenBrightnessMode();
    }
    else{
        return Promise.resolve(1)
    }
}

const oldSetScreenBrightnessMode = NativeModules.ScreenBrightness.setScreenBrightnessMode

NativeModules.ScreenBrightness.setScreenBrightnessMode = (value) => {
    console.log("modified setScreenBrightnessMode")
    if (Platform.OS === "android") {
        return oldSetScreenBrightnessMode(value);
    }
    else{
        return Promise.resolve(1)
    }
}
