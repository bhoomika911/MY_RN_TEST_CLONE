package com.myantskiin.application

import android.app.Activity
import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import com.horcrux.svg.SvgPackage
import com.myantskiin.BuildConfig
import com.myantskiin.generated.BasePackageList
import com.myantskiin.helpers.ApplicationService
import com.myantskiin.helpers.PluggableApplication
import com.oblador.keychain.KeychainPackage
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage
import com.swmansion.reanimated.ReanimatedPackage
import com.swmansion.rnscreens.RNScreensPackage
import com.th3rdwave.safeareacontext.SafeAreaContextPackage
import org.reactnative.maskedview.RNCMaskedViewPackage
import org.unimodules.adapters.react.ModuleRegistryAdapter
import org.unimodules.adapters.react.ReactModuleRegistryProvider
import com.reactcommunity.rnlocalize.RNLocalizePackage;
import com.zyu.ReactNativeWheelPickerPackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;
import java.lang.ref.WeakReference
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// quickblox-react-native-sdk
import com.quickblox.reactnative.RNQbReactnativePackage;
// react-native-incall-manager
import com.zxcpoiu.incallmanager.InCallManagerPackage;
import com.RNFetchBlob.RNFetchBlobPackage
import it.innove.BleManagerPackage;
import org.wonday.orientation.OrientationPackage
import com.voximplant.foregroundservice.VIForegroundServicePackage
import com.github.wuxudong.rncharts.MPAndroidChartPackage
import com.github.reactnativecommunity.location.RNLocationPackage;
import com.BV.LinearGradient.LinearGradientPackage;

/**
 * Created by ahmed.saad on 2020-03-18.
 * Copyright © 2020. All rights reserved.
 */
class ReactPlugin(val application: Application): ApplicationService, ReactApplication {
    private val mModuleRegistryProvider = ReactModuleRegistryProvider(
            BasePackageList().packageList,
            emptyList()
    )

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(application) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            return listOf(
                    MainReactPackage(),
                    SvgPackage(),
                    KeychainPackage(),
                    RNCMaskedViewPackage(),
                    SafeAreaContextPackage(),
                    ReanimatedPackage(),
                    RNGestureHandlerPackage(),
                    RNScreensPackage(),
                    RNLocalizePackage(),
                    ReactNativeWheelPickerPackage(),
                    RNDateTimePickerPackage(),
                    RNFetchBlobPackage(),
                    BleManagerPackage(),
                    OrientationPackage(),
                    VIForegroundServicePackage(),
                    MPAndroidChartPackage(),
                    RNLocationPackage(),
                    ModuleRegistryAdapter(mModuleRegistryProvider),
                    AsyncStoragePackage(),
                    RNQbReactnativePackage(),
                    InCallManagerPackage(),
                    LinearGradientPackage()
            )
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        SoLoader.init(application,  /* native exopackage */false)
    }
}