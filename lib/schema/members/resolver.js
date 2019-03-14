"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const bcrypt = require("bcryptjs");
exports.default = {
    Query: {
        members(parent, args, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield prisma.members();
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        member(_, { id }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const member = yield prisma.member({ id });
                    return member || new apollo_server_1.ValidationError('Member ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        deleteManyMembers(parent, args, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield prisma.deleteManyMembers();
            });
        },
        deleteManyMemberships(parent, args, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield prisma.deleteManyMemberships();
            });
        },
        addMember(_, { input }, { prisma, db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { levelId } = input, rest = __rest(input
                    // Hash password
                    , ["levelId"]);
                    // Hash password
                    const password = yield bcrypt.hash('ashdshjhjsd', 10);
                    const member = yield prisma.createMember(Object.assign({}, rest, { password, membership: { create: {
                                level: { connect: { id: levelId } },
                                type: rest.type
                            } } }));
                    return { member, success: true, error: null };
                }
                catch (error) {
                    return { error, success: false, member: null };
                }
            });
        },
        updateMember(_, { input }, { prisma, db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { memberId, levelId, type } = input;
                    const member = yield prisma.updateMember({
                        where: { id: memberId },
                        data: Object.assign({ type }, (levelId && { membership: {
                                update: { level: { connect: { id: levelId } } }
                            }
                        }))
                    });
                    return { member, success: true, error: null };
                }
                catch (error) {
                    return { error, success: false, member: null };
                }
            });
        },
        addMembership(_, { input }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { memberId, levelId, type } = input;
                    const membership = yield db.mutation.createMembership({
                        data: {
                            type,
                            level: { connect: { id: levelId } },
                            member: { connect: { id: memberId } },
                        }
                    }, info);
                    return { membership, success: true, error: null };
                }
                catch (error) {
                    return { error, success: false, membership: null };
                }
            });
        },
    },
    Member: {
        membership: ({ id }, args, { prisma }, info) => {
            return prisma.member({ id }).membership();
        }
    },
    Membership: {
        level: ({ id }, args, { prisma }, info) => {
            return prisma.membership({ id }).level();
        }
    }
};
//# sourceMappingURL=resolver.js.map