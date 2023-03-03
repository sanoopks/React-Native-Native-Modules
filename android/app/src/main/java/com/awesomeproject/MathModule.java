package com.awesomeproject;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MathModule extends ReactContextBaseJavaModule {
    MathModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "MathModule";
    }

    @ReactMethod()
    public void add(double a, double b, Promise promise) {
        try {
            Double result = a + b;
            Log.d("MathModule", "add: Sum is " + result);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod()
    public void subtract(double a, double b, Promise promise) {
        try {
        Double result = a-b;
        Log.d("MathModule", "subtract: Subtraction is "+ result);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod()
    public void multiply(double a, double b, Promise promise) {
        try {
        Double result = a*b;
        Log.d("MathModule", "multiply: Multiplication is "+ result);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod()
    public void divide(double a, double b, Promise promise) {
        try {
            Double result = a / b;
            Log.d("MathModule", "divide: Division is " + result);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject(e);
        }
    }
}

