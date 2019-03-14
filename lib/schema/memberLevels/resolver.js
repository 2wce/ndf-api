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
const apollo_server_1 = require("apollo-server");
exports.default = {
    Query: {
        memberLevels(parent, args, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.query.memberLevels({}, info);
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        memberLevel(_, { id }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const memberLevel = yield db.query.memberLevel({ where: { id } }, info);
                    return memberLevel || new apollo_server_1.ValidationError('MemberLevel ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addMemberLevel(_, { input }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const memberLevel = yield prisma.createMemberLevel(Object.assign({}, input));
                    return { success: true, error: null, memberLevel };
                }
                catch (error) {
                    return { success: false, error, memberLevel: null };
                }
            });
        },
    },
};
//# sourceMappingURL=resolver.js.map