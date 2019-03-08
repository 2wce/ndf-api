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
const eventResolvers = {
    Query: {
        events(parent, args, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.query.events({}, info);
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        event(_, { id }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const event = yield db.query.event({ where: { id } }, info);
                    return event || new apollo_server_1.ValidationError('Event ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addEvent(parent, { input }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { agendaId, regionId, memberLevelId } = input, rest = __rest(input, ["agendaId", "regionId", "memberLevelId"]);
                    const event = yield prisma.createEvent(Object.assign({}, rest, (agendaId &&
                        { agenda: { connect: { id: agendaId } } }), (regionId && {
                        region: { connect: { id: regionId } }
                    }), (memberLevelId && {
                        memberLevel: { connect: { id: memberLevelId } }
                    })));
                    return { success: true, error: null, event };
                }
                catch (error) {
                    return { success: false, error: error, event: null };
                }
            });
        },
    }
};
exports.default = eventResolvers;
//# sourceMappingURL=resolver.js.map