(this.webpackJsonpweb3gl=this.webpackJsonpweb3gl||[]).push([[15],{1031:function(e,n,r){"use strict";(function(e){r.d(n,"a",(function(){return l}));var t=r(854),o=r(2),a=r.n(o),i=r(36),u=r(1),c=r(4),s=r(43),d=r.n(s),f=r(623),l=function(){function n(){var r=this;Object(u.a)(this,n),this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this.deviceModel=null,this._events=new d.a,this.send=function(){var n=Object(i.a)(a.a.mark((function n(t,o,i,u){var c,s,d,l,p=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=p.length>4&&void 0!==p[4]?p[4]:e.alloc(0),s=p.length>5&&void 0!==p[5]?p[5]:[f.StatusCodes.OK],!(c.length>=256)){n.next=4;break}throw new f.TransportError("data.length exceed 256 bytes limit. Got: "+c.length,"DataLengthTooBig");case 4:return n.next=6,r.exchange(e.concat([e.from([t,o,i,u]),e.from([c.length]),c]));case 6:if(d=n.sent,l=d.readUInt16BE(d.length-2),s.some((function(e){return e===l}))){n.next=10;break}throw new f.TransportStatusError(l);case 10:return n.abrupt("return",d);case 11:case"end":return n.stop()}}),n)})));return function(e,r,t,o){return n.apply(this,arguments)}}(),this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=function(){var e=Object(i.a)(a.a.mark((function e(n){var t,o,i,u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.exchangeBusyPromise){e.next=2;break}throw new f.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");case 2:return o=new Promise((function(e){t=e})),r.exchangeBusyPromise=o,i=!1,u=setTimeout((function(){i=!0,r.emit("unresponsive")}),r.unresponsiveTimeout),e.prev=6,e.next=9,n();case 9:return c=e.sent,i&&r.emit("responsive"),e.abrupt("return",c);case 12:return e.prev=12,clearTimeout(u),t&&t(),r.exchangeBusyPromise=null,e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[6,,12,17]])})));return function(n){return e.apply(this,arguments)}}(),this._appAPIlock=null}return Object(c.a)(n,[{key:"exchange",value:function(e){throw new Error("exchange not implemented")}},{key:"setScrambleKey",value:function(e){}},{key:"close",value:function(){return Promise.resolve()}},{key:"on",value:function(e,n){this._events.on(e,n)}},{key:"off",value:function(e,n){this._events.removeListener(e,n)}},{key:"emit",value:function(e){for(var n,r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];(n=this._events).emit.apply(n,[e].concat(t))}},{key:"setDebugMode",value:function(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"setExchangeUnresponsiveTimeout",value:function(e){this.unresponsiveTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,n,r){var o,a=Object(t.a)(n);try{for(a.s();!(o=a.n()).done;){var i=o.value;e[i]=this.decorateAppAPIMethod(i,e[i],e,r)}}catch(u){a.e(u)}finally{a.f()}}},{key:"decorateAppAPIMethod",value:function(e,n,r,t){var o=this;return Object(i.a)(a.a.mark((function i(){var u,c,s,d,l=arguments;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(u=o._appAPIlock)){a.next=3;break}return a.abrupt("return",Promise.reject(new f.TransportError("Ledger Device is busy (lock "+u+")","TransportLocked")));case 3:for(a.prev=3,o._appAPIlock=e,o.setScrambleKey(t),c=l.length,s=new Array(c),d=0;d<c;d++)s[d]=l[d];return a.next=9,n.apply(r,s);case 9:return a.abrupt("return",a.sent);case 10:return a.prev=10,o._appAPIlock=null,a.finish(10);case 13:case"end":return a.stop()}}),i,null,[[3,,10,13]])})))}}],[{key:"create",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,r=arguments.length>1?arguments[1]:void 0;return new Promise((function(t,o){var a=!1,i=e.listen({next:function(r){a=!0,i&&i.unsubscribe(),u&&clearTimeout(u),e.open(r.descriptor,n).then(t,o)},error:function(e){u&&clearTimeout(u),o(e)},complete:function(){u&&clearTimeout(u),a||o(new f.TransportError(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),u=r?setTimeout((function(){i.unsubscribe(),o(new f.TransportError(e.ErrorMessage_ListenTimeout,"ListenTimeout"))}),r):null}))}}]),n}();l.isSupported=void 0,l.list=void 0,l.listen=void 0,l.open=void 0,l.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",l.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,r(8).Buffer)},623:function(e,n,r){"use strict";r.r(n),r.d(n,"AccountNameRequiredError",(function(){return d})),r.d(n,"AccountNotSupported",(function(){return f})),r.d(n,"AmountRequired",(function(){return l})),r.d(n,"BluetoothRequired",(function(){return p})),r.d(n,"BtcUnmatchedApp",(function(){return g})),r.d(n,"CantOpenDevice",(function(){return v})),r.d(n,"CantScanQRCode",(function(){return Me})),r.d(n,"CashAddrNotSupported",(function(){return E})),r.d(n,"CurrencyNotSupported",(function(){return h})),r.d(n,"DBNotReset",(function(){return Xe})),r.d(n,"DBWrongPassword",(function(){return Ye})),r.d(n,"DeviceAppVerifyNotSupported",(function(){return A})),r.d(n,"DeviceGenuineSocketEarlyClose",(function(){return T})),r.d(n,"DeviceHalted",(function(){return S})),r.d(n,"DeviceInOSUExpected",(function(){return I})),r.d(n,"DeviceNameInvalid",(function(){return C})),r.d(n,"DeviceNotGenuineError",(function(){return m})),r.d(n,"DeviceOnDashboardExpected",(function(){return N})),r.d(n,"DeviceOnDashboardUnexpected",(function(){return D})),r.d(n,"DeviceShouldStayInApp",(function(){return Ue})),r.d(n,"DeviceSocketFail",(function(){return y})),r.d(n,"DeviceSocketNoBulkStatus",(function(){return O})),r.d(n,"DisconnectedDevice",(function(){return R})),r.d(n,"DisconnectedDeviceDuringOperation",(function(){return w})),r.d(n,"ETHAddressNonEIP",(function(){return Le})),r.d(n,"EnpointConfigError",(function(){return b})),r.d(n,"EthAppPleaseEnableContractData",(function(){return U})),r.d(n,"FeeEstimationFailed",(function(){return _})),r.d(n,"FeeNotLoaded",(function(){return xe})),r.d(n,"FeeRequired",(function(){return Be})),r.d(n,"FeeTooHigh",(function(){return Ge})),r.d(n,"FirmwareNotRecognized",(function(){return k})),r.d(n,"FirmwareOrAppUpdateRequired",(function(){return Ke})),r.d(n,"GasLessThanEstimate",(function(){return ue})),r.d(n,"GenuineCheckFailed",(function(){return je})),r.d(n,"HardResetFail",(function(){return P})),r.d(n,"InvalidAddress",(function(){return L})),r.d(n,"InvalidAddressBecauseDestinationIsAlsoSource",(function(){return M})),r.d(n,"InvalidXRPTag",(function(){return F})),r.d(n,"LatestMCUInstalledError",(function(){return x})),r.d(n,"LedgerAPI4xx",(function(){return We})),r.d(n,"LedgerAPI5xx",(function(){return ze})),r.d(n,"LedgerAPIError",(function(){return G})),r.d(n,"LedgerAPIErrorWithMessage",(function(){return q})),r.d(n,"LedgerAPINotAvailable",(function(){return H})),r.d(n,"MCUNotGenuineToDashboard",(function(){return ge})),r.d(n,"ManagerAppAlreadyInstalledError",(function(){return j})),r.d(n,"ManagerAppDepInstallRequired",(function(){return z})),r.d(n,"ManagerAppDepUninstallRequired",(function(){return K})),r.d(n,"ManagerAppRelyOnBTCError",(function(){return W})),r.d(n,"ManagerDeviceLockedError",(function(){return V})),r.d(n,"ManagerFirmwareNotEnoughSpaceError",(function(){return Y})),r.d(n,"ManagerNotEnoughSpaceError",(function(){return X})),r.d(n,"ManagerUninstallBTCDep",(function(){return J})),r.d(n,"NetworkDown",(function(){return Q})),r.d(n,"NoAccessToCamera",(function(){return oe})),r.d(n,"NoAddressesFound",(function(){return Z})),r.d(n,"NoDBPathGiven",(function(){return Ve})),r.d(n,"NotEnoughBalance",(function(){return $})),r.d(n,"NotEnoughBalanceBecauseDestinationNotCreated",(function(){return te})),r.d(n,"NotEnoughBalanceInParentAccount",(function(){return ne})),r.d(n,"NotEnoughBalanceToDelegate",(function(){return ee})),r.d(n,"NotEnoughGas",(function(){return ae})),r.d(n,"NotEnoughSpendableBalance",(function(){return re})),r.d(n,"NotSupportedLegacyAddress",(function(){return ie})),r.d(n,"PairingFailed",(function(){return He})),r.d(n,"PasswordIncorrectError",(function(){return se})),r.d(n,"PasswordsDontMatchError",(function(){return ce})),r.d(n,"RecipientRequired",(function(){return ve})),r.d(n,"RecommendSubAccountsToEmpty",(function(){return de})),r.d(n,"RecommendUndelegation",(function(){return fe})),r.d(n,"StatusCodes",(function(){return Qe})),r.d(n,"SyncError",(function(){return qe})),r.d(n,"TimeoutTagged",(function(){return le})),r.d(n,"TransportError",(function(){return Je})),r.d(n,"TransportInterfaceNotAvailable",(function(){return Re})),r.d(n,"TransportOpenUserCancelled",(function(){return Oe})),r.d(n,"TransportRaceCondition",(function(){return we})),r.d(n,"TransportStatusError",(function(){return $e})),r.d(n,"TransportWebUSBGestureRequired",(function(){return be})),r.d(n,"UnavailableTezosOriginatedAccountReceive",(function(){return Ee})),r.d(n,"UnavailableTezosOriginatedAccountSend",(function(){return he})),r.d(n,"UnexpectedBootloader",(function(){return pe})),r.d(n,"UnknownMCU",(function(){return B})),r.d(n,"UpdateFetchFileFail",(function(){return Ae})),r.d(n,"UpdateIncorrectHash",(function(){return Te})),r.d(n,"UpdateIncorrectSig",(function(){return me})),r.d(n,"UpdateYourApp",(function(){return Ne})),r.d(n,"UserRefusedAddress",(function(){return Ie})),r.d(n,"UserRefusedAllowManager",(function(){return Ce})),r.d(n,"UserRefusedDeviceNameChange",(function(){return De})),r.d(n,"UserRefusedFirmwareUpdate",(function(){return Se})),r.d(n,"UserRefusedOnDevice",(function(){return ye})),r.d(n,"WebsocketConnectionError",(function(){return _e})),r.d(n,"WebsocketConnectionFailed",(function(){return ke})),r.d(n,"WrongAppForCurrency",(function(){return Fe})),r.d(n,"WrongDeviceForAccount",(function(){return Pe})),r.d(n,"addCustomErrorDeserializer",(function(){return a})),r.d(n,"createCustomErrorClass",(function(){return i})),r.d(n,"deserializeError",(function(){return u})),r.d(n,"getAltStatusMessage",(function(){return Ze})),r.d(n,"serializeError",(function(){return c}));var t={},o={},a=function(e,n){o[e]=n},i=function(e){var n=function(n,r){Object.assign(this,r),this.name=e,this.message=n||e,this.stack=(new Error).stack};return n.prototype=new Error,t[e]=n,n},u=function e(n){if("object"===typeof n&&n){try{var r=JSON.parse(n.message);r.message&&r.name&&(n=r)}catch(f){}var a=void 0;if("string"===typeof n.name){var u=n.name,c=o[u];if(c)a=c(n);else{var s="Error"===u?Error:t[u];s||(console.warn("deserializing an unknown class '"+u+"'"),s=i(u)),a=Object.create(s.prototype);try{for(var d in n)n.hasOwnProperty(d)&&(a[d]=n[d])}catch(f){}}}else a=new Error(n.message);return!a.stack&&Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return new Error(String(n))},c=function(e){return e?"object"===typeof e?s(e,[]):"function"===typeof e?"[Function: "+(e.name||"anonymous")+"]":e:e};function s(e,n){var r={};n.push(e);for(var t=0,o=Object.keys(e);t<o.length;t++){var a=o[t],i=e[a];"function"!==typeof i&&(i&&"object"===typeof i?-1!==n.indexOf(e[a])?r[a]="[Circular]":r[a]=s(e[a],n.slice(0)):r[a]=i)}return"string"===typeof e.name&&(r.name=e.name),"string"===typeof e.message&&(r.message=e.message),"string"===typeof e.stack&&(r.stack=e.stack),r}var d=i("AccountNameRequired"),f=i("AccountNotSupported"),l=i("AmountRequired"),p=i("BluetoothRequired"),g=i("BtcUnmatchedApp"),v=i("CantOpenDevice"),E=i("CashAddrNotSupported"),h=i("CurrencyNotSupported"),A=i("DeviceAppVerifyNotSupported"),T=i("DeviceGenuineSocketEarlyClose"),m=i("DeviceNotGenuine"),N=i("DeviceOnDashboardExpected"),D=i("DeviceOnDashboardUnexpected"),I=i("DeviceInOSUExpected"),S=i("DeviceHalted"),C=i("DeviceNameInvalid"),y=i("DeviceSocketFail"),O=i("DeviceSocketNoBulkStatus"),R=i("DisconnectedDevice"),w=i("DisconnectedDeviceDuringOperation"),b=i("EnpointConfig"),U=i("EthAppPleaseEnableContractData"),_=i("FeeEstimationFailed"),k=i("FirmwareNotRecognized"),P=i("HardResetFail"),F=i("InvalidXRPTag"),L=i("InvalidAddress"),M=i("InvalidAddressBecauseDestinationIsAlsoSource"),x=i("LatestMCUInstalledError"),B=i("UnknownMCU"),G=i("LedgerAPIError"),q=i("LedgerAPIErrorWithMessage"),H=i("LedgerAPINotAvailable"),j=i("ManagerAppAlreadyInstalled"),W=i("ManagerAppRelyOnBTC"),z=i("ManagerAppDepInstallRequired"),K=i("ManagerAppDepUninstallRequired"),V=i("ManagerDeviceLocked"),Y=i("ManagerFirmwareNotEnoughSpace"),X=i("ManagerNotEnoughSpace"),J=i("ManagerUninstallBTCDep"),Q=i("NetworkDown"),Z=i("NoAddressesFound"),$=i("NotEnoughBalance"),ee=i("NotEnoughBalanceToDelegate"),ne=i("NotEnoughBalanceInParentAccount"),re=i("NotEnoughSpendableBalance"),te=i("NotEnoughBalanceBecauseDestinationNotCreated"),oe=i("NoAccessToCamera"),ae=i("NotEnoughGas"),ie=i("NotSupportedLegacyAddress"),ue=i("GasLessThanEstimate"),ce=i("PasswordsDontMatch"),se=i("PasswordIncorrect"),de=i("RecommendSubAccountsToEmpty"),fe=i("RecommendUndelegation"),le=i("TimeoutTagged"),pe=i("UnexpectedBootloader"),ge=i("MCUNotGenuineToDashboard"),ve=i("RecipientRequired"),Ee=i("UnavailableTezosOriginatedAccountReceive"),he=i("UnavailableTezosOriginatedAccountSend"),Ae=i("UpdateFetchFileFail"),Te=i("UpdateIncorrectHash"),me=i("UpdateIncorrectSig"),Ne=i("UpdateYourApp"),De=i("UserRefusedDeviceNameChange"),Ie=i("UserRefusedAddress"),Se=i("UserRefusedFirmwareUpdate"),Ce=i("UserRefusedAllowManager"),ye=i("UserRefusedOnDevice"),Oe=i("TransportOpenUserCancelled"),Re=i("TransportInterfaceNotAvailable"),we=i("TransportRaceCondition"),be=i("TransportWebUSBGestureRequired"),Ue=i("DeviceShouldStayInApp"),_e=i("WebsocketConnectionError"),ke=i("WebsocketConnectionFailed"),Pe=i("WrongDeviceForAccount"),Fe=i("WrongAppForCurrency"),Le=i("ETHAddressNonEIP"),Me=i("CantScanQRCode"),xe=i("FeeNotLoaded"),Be=i("FeeRequired"),Ge=i("FeeTooHigh"),qe=i("SyncError"),He=i("PairingFailed"),je=i("GenuineCheckFailed"),We=i("LedgerAPI4xx"),ze=i("LedgerAPI5xx"),Ke=i("FirmwareOrAppUpdateRequired"),Ve=i("NoDBPathGiven"),Ye=i("DBWrongPassword"),Xe=i("DBNotReset");function Je(e,n){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=n}Je.prototype=new Error,a("TransportError",(function(e){return new Je(e.message,e.id)}));var Qe={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function Ze(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}function $e(e){this.name="TransportStatusError";var n=Object.keys(Qe).find((function(n){return Qe[n]===e}))||"UNKNOWN_ERROR",r=Ze(e)||n,t=e.toString(16);this.message="Ledger device: "+r+" (0x"+t+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=n}$e.prototype=new Error,a("TransportStatusError",(function(e){return new $e(e.statusCode)}))},759:function(e,n,r){"use strict";r.d(n,"a",(function(){return a}));var t=0,o=[],a=function(e,n,r){var a={type:e,id:String(++t),date:new Date};n&&(a.message=n),r&&(a.data=r),function(e){for(var n=0;n<o.length;n++)try{o[n](e)}catch(r){console.error(r)}}(a)};"undefined"!==typeof window&&(window.__ledgerLogsListen=function(e){return o.push(e),function(){var n=o.indexOf(e);-1!==n&&(o[n]=o[o.length-1],o.pop())}})},854:function(e,n,r){"use strict";r.d(n,"a",(function(){return o}));var t=r(147);function o(e,n){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(t.a)(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}}}]);
//# sourceMappingURL=15.05e8def7.chunk.js.map
