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
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.default = {
    Mutation: {
        login(parent, { input }, { prisma }, info) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // destructure credentials from argument data
                    const { email, password } = input;
                    // get member by email
                    const member = yield prisma.member({ email });
                    // no member with this email
                    if (!member) {
                        throw Error('Invalid email or password!');
                    }
                    // check password
                    const passwordIsCorrect = yield bcrypt.compare(password, member.password);
                    if (!passwordIsCorrect) {
                        throw Error('Invalid username or password!');
                    }
                    // generate node token for existing User node
                    const token = jwt.sign({ member, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 }, 'jkdksdjkdskjsdkjd');
                    // return the signed jwt
                    return { token };
                }
                catch (error) {
                    throw error;
                }
            });
        }
    }
};
//# sourceMappingURL=resolver.js.map