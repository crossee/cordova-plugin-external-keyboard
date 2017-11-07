package org.apache.cordova.externalkeyboard;

import android.content.res.Configuration;
import android.app.Activity;


import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/**
 * Created by crossee on 2017. 11. 6..
 */

public class ExternalKeyboard extends CordovaPlugin{
    static boolean returnValue = false;
    Activity activity;
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        if (action.equals("isExternalKeyboardAttached")) {
            returnValue = this.isExternalKeyboardAttached(activity);
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.CLASS_NOT_FOUND_EXCEPTION, returnValue));
            return true;
        }
        return false;
    }

    private boolean isExternalKeyboardAttached(Activity activity) {
        Configuration config = activity.getResources().getConfiguration();
        return !(config.keyboard == Configuration.KEYBOARD_NOKEYS
                || config.hardKeyboardHidden == Configuration.KEYBOARDHIDDEN_YES);
    }


}
