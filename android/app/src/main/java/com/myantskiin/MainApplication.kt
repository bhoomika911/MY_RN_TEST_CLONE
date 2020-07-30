package com.myantskiin

import com.myantskiin.application.ReactPlugin
import com.myantskiin.helpers.ApplicationService
import com.myantskiin.helpers.PluggableApplication


class MainApplication : PluggableApplication() {

    override var services: ArrayList<ApplicationService> = arrayListOf(
            ReactPlugin(this)
    )
}