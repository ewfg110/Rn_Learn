package com.testrn.moudle;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by over on 17/6/19.
 */

public class MyToastMoudle extends ReactContextBaseJavaModule {


    public MyToastMoudle(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyToastMoudle";
    }

    @ReactMethod
    public void showToast(String msg){
        Toast.makeText(getReactApplicationContext(),msg,Toast.LENGTH_SHORT).show();
    }
}
