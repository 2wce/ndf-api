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
const bcrypt = require("bcryptjs");
const memberResolvers = {
    Query: {
        members(parent, args, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.query.members({}, info);
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        member(_, { id }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const member = yield db.query.member({ where: { id } }, info);
                    return member || new apollo_server_1.ValidationError('Member ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addMember(_, { input }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Hash password
                    const password = yield bcrypt.hash('ashdshjhjsd', 10);
                    const member = yield db.mutation.createMember({
                        data: Object.assign({}, input, { password })
                    }, info);
                    return { success: true, error: null, member };
                }
                catch (error) {
                    return { success: false, error: error, member: null };
                }
            });
        },
        addMembership(_, { input }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { memberId, levelId, type } = input;
                    const membership = yield db.mutation.createMembership({
                        data: {
                            level: { connect: { id: levelId } },
                            member: { connect: { id: memberId } },
                            type
                        }
                    }, info);
                    return { success: true, error: null, membership };
                }
                catch (error) {
                    return { success: false, error: error, membership: null };
                }
            });
        },
    },
};
exports.default = memberResolvers;
//# sourceMappingURL=resolver.js.map