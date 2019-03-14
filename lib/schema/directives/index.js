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
const utils_1 = require("../../utils");
const apollo_server_1 = require("apollo-server");
exports.directiveResolvers = {
    // Check if user is authenticated to make request
    isAuthenticated: (next, source, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const authorization = ctx.req.headers.authorization || '';
        const token = authorization.slice(7);
        const memberId = yield utils_1.validateToken(token);
        if (memberId) {
            ctx.memberId = memberId;
            return next();
        }
        return new apollo_server_1.AuthenticationError('Unauthorized Access');
    }),
    // Check if user is authenticated & admin
    isAdmin: (next, source, args, ctx) => __awaiter(this, void 0, void 0, function* () {
        const userId = yield utils_1.getUserId(ctx);
        // console.log(userId)
        if (userId) {
            const user = yield ctx.db.exists.Member({
                id: userId,
                isAdmin: true
            });
            if (user)
                next();
        }
    })
};
//# sourceMappingURL=index.js.map