package com.myantskiin

import android.content.Intent
import android.content.res.Configuration
import com.facebook.react.*
import com.myantskiin.helpers.PluggableApplication
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView

class MainActivity : ReactActivity() {
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    override fun getMainComponentName() = "MyantSkiin"
    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        val intent = Intent("onConfigurationChanged")
        intent.putExtra("newConfig", newConfig)
        this.sendBroadcast(intent)
    }
    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): ReactRootView {
                return RNGestureHandlerEnabledRootView(this@MainActivity)
            }

            override fun getReactNativeHost(): ReactNativeHost {
                return (
                        (application as PluggableApplication).services
                                .first { it is ReactApplication } as ReactApplication
                        ).reactNativeHost
            }
        }
    }
}