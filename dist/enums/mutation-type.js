"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationType = void 0;
var MutationType;
(function (MutationType) {
    MutationType["CREATE_CHAT"] = "CREATE_CHAT";
    MutationType["DELETE_CHAT"] = "DELETE_CHAT";
    MutationType["CREATE_GROUP_CHAT"] = "CREATE_GROUP_CHAT";
    MutationType["LEAVE_GROUP_CHAT"] = "LEAVE_GROUP_CHAT";
    MutationType["ADD_MSG"] = "ADD_MSG";
    MutationType["REMOVE_MSG_FOR_ALL"] = "REMOVE_MSG_FOR_ALL";
    MutationType["REMOVE_MSG_FOR_ME"] = "REMOVE_MSG_FOR_ME";
    MutationType["EDIT_MSG"] = "EDIT_MSG";
})(MutationType || (exports.MutationType = MutationType = {}));
