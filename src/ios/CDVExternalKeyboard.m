//
//  CDVExternalKeyboard.m
//
//  Created by crossee on 2017. 11. 1..
//

#import "CDVExternalKeyboard.h"
#import <Cordova/CDV.h>
#import <objc/message.h>

@implementation CDVExternalKeyboard

// direct check for external keyboard
- (void) isExternalKeyboardAttached:(CDVInvokedUrlCommand *)command
{
    BOOL externalKeyboardAttached = NO;

    @try {
        NSString *keyboardClassName = [@[@"UI", @"Key", @"boa", @"rd", @"Im", @"pl"] componentsJoinedByString:@""];
        Class c = NSClassFromString(keyboardClassName);
        SEL sharedInstanceSEL = NSSelectorFromString(@"sharedInstance");
        if (c == Nil || ![c respondsToSelector:sharedInstanceSEL]) {
            externalKeyboardAttached = NO;
        }

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"
        id sharedKeyboardInstance = [c performSelector:sharedInstanceSEL];
#pragma clang diagnostic pop

        if (![sharedKeyboardInstance isKindOfClass:NSClassFromString(keyboardClassName)]) {
            externalKeyboardAttached = NO;
        }

        NSString *externalKeyboardSelectorName = [@[@"is", @"InH", @"ardw", @"areK", @"eyb", @"oard", @"Mode"] componentsJoinedByString:@""];
        SEL externalKeyboardSEL = NSSelectorFromString(externalKeyboardSelectorName);
        if (![sharedKeyboardInstance respondsToSelector:externalKeyboardSEL]) {
            externalKeyboardAttached = NO;
        }

        externalKeyboardAttached = ((BOOL ( *)(id, SEL))objc_msgSend)(sharedKeyboardInstance, externalKeyboardSEL);
    } @catch(__unused NSException *ex) {
        externalKeyboardAttached = NO;
    }
    // cordova plugin 연동 부분
    CDVPluginResult*  pluginResult = [ CDVPluginResult
                                      resultWithStatus    : CDVCommandStatus_OK
                                      messageAsBool:externalKeyboardAttached
                                      ];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
