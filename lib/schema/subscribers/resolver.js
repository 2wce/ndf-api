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
        subscribers(parent, args, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield prisma.subscribers({ orderBy: "email_ASC" });
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        subscriber(_, { id }, { prisma }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const subscriber = yield prisma.subscriber({ id });
                    return subscriber || new apollo_server_1.ValidationError('Subscriber ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addSubscriber(_, { email }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const subscriber = yield prisma.createSubscriber({
                        email
                    });
                    return { success: true, error: null, subscriber };
                }
                catch (error) {
                    return { success: false, error, subscriber: null };
                }
            });
        },
    },
};
//# sourceMappingURL=resolver.js.map