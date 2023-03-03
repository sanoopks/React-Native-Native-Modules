#import "RCTMathModule.h"

@implementation RCTMathModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(add: (double)a to:(double)b resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  double result = a+b;
  resolve([NSNumber numberWithDouble:result]);
}

RCT_EXPORT_METHOD(subtract: (double)a to:(double)b resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  double result = a-b;
  resolve([NSNumber numberWithDouble:result]);
}

RCT_EXPORT_METHOD(multiply: (double)a to:(double)b resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  double result = a*b;
  resolve([NSNumber numberWithDouble:result]);
}

RCT_EXPORT_METHOD(divide: (double)a to:(double)b resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  double result = a/b;
  resolve([NSNumber numberWithDouble:result]);
}
@end
