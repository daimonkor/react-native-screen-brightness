import {NativeModules, Platform} from 'react-native';

export default NativeModules.ScreenBrightness;

const oldHasPermission = NativeModules.ScreenBrightness.hasPermission
NativeModules.ScreenBrightness.hasPermission = async () => {
    console.log("call modified check permission")
    if (Platform.OS === "android") {
        return oldHasPermission();
    }
    else{
        return Promise.resolve(true)
    }
}

const oldGetScreenBrightnessMode = NativeModules.ScreenBrightness.getScreenBrightnessMode
NativeModules.ScreenBrightness.getScreenBrightnessMode = async () => {
    console.log("call modified getScreenBrightnessMode")
    if (Platform.OS === "android") {
        return oldGetScreenBrightnessMode();
    }
    else{
        return Promise.resolve(1)
    }
}

const oldSetScreenBrightnessMode = NativeModules.ScreenBrightness.setScreenBrightnessMode
NativeModules.ScreenBrightness.setScreenBrightnessMode = (value) => {
    console.log("call modified setScreenBrightnessMode")
    if (Platform.OS === "android") {
        return oldSetScreenBrightnessMode(value);
    }
    else{
        return Promise.resolve(1)
    }
}

const oldGetBrightness = NativeModules.ScreenBrightness.getBrightness
NativeModules.ScreenBrightness.getBrightness = () => {
    console.log("call modified getBrightness")
    if (Platform.OS === "android") {
        return new Promise(((resolve, reject) => {
            oldGetBrightness().then((value) => {
                return resolve(value / 255)
            }).catch(reject)
        }));
    }
    else{
        return oldGetBrightness()
    }
}