"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const apollo_server_errors_1 = require("apollo-server-errors");
exports.getUserId = (ctx) => {
    if (Boolean(ctx.req.session.memberId)) {
        return ctx.req.session.memberId;
    }
};
exports.validateToken = (authToken) => __awaiter(this, void 0, void 0, function* () {
    if (authToken.length < 1)
        undefined;
    try {
        // const { env: { APP_SECRET }} = process
        const APP_SECRET = 'jkdksdjkdskjsdkjd';
        if (APP_SECRET) {
            const { memberId } = yield jwt.verify(authToken, APP_SECRET);
            return memberId;
        }
        return undefined;
    }
    catch (error) {
        throw new apollo_server_errors_1.AuthenticationError('Invalid Token');
    }
});
//# sourceMappingURL=helpers.js.map