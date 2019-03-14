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
        regions(parent, args, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield prisma.regions();
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        region(_, { id }, { prisma }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const region = yield prisma.region({ id });
                    return region || new apollo_server_1.ValidationError('Region ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addRegion(_, { input }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const region = yield prisma.createRegion(Object.assign({}, input));
                    return { success: true, error: null, region };
                }
                catch (error) {
                    return { success: false, error, region: null };
                }
            });
        },
    },
};
//# sourceMappingURL=resolver.js.map