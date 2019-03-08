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
const bookingResolvers = {
    Query: {
        bookings(parent, args, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    return yield db.query.bookings({}, info);
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
        booking(_, { id }, { db }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const booking = yield db.query.booking({ where: { id } }, info);
                    return booking || new apollo_server_1.ValidationError('Booking ID not found');
                }
                catch (error) {
                    throw new apollo_server_1.ApolloError(error);
                }
            });
        },
    },
    Mutation: {
        addBooking(_, { input }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const { eventId, memberId } = input;
                    const booking = yield prisma.createBooking({
                        event: { connect: { id: eventId } },
                        member: { connect: { id: memberId } }
                    });
                    return { success: true, error: null, booking };
                }
                catch (error) {
                    return { success: false, error: error, booking: null };
                }
            });
        },
    },
};
exports.default = bookingResolvers;
//# sourceMappingURL=resolver.js.map