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
        agendas(parent, args, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield prisma.agendas({ orderBy: "name_ASC" });
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        agenda(_, { id }, { prisma }) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const agenda = yield prisma.agenda({ id });
                    return agenda || new apollo_server_1.ValidationError('Agenda ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addAgenda(_, { input }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const agenda = yield prisma.createAgenda(Object.assign({}, input));
                    return { success: true, error: null, agenda };
                }
                catch (error) {
                    return { success: false, error, agenda: null };
                }
            });
        },
    },
};
//# sourceMappingURL=resolver.js.map