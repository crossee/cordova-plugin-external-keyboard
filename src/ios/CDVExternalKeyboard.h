//
//  CDVExternalKeyboard.h
//
//  Created by crossee on 2017. 11. 1..
//

#import <Cordova/CDV.h>

@interface CDVExternalKeyboard : CDVPlugin

- (void) isExternalKeyboardAttached:(CDVInvokedUrlCommand *)command;

@end
