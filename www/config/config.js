"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    postgres: {
        username: "postgres",
        password: "postgres",
        database: "database-1",
        host: "database-1.ccqi1xutvahh.us-east-1.rds.amazonaws.com",
        dialect: "postgres",
    },
    aws: {
        aws_region: "us-east-1",
        aws_profile: "default",
        aws_media_bucket: "udagram",
    },
    jwt: {
        secret: " ",
    },
    prod: {
        username: "",
        password: "",
        database: "",
        host: "",
        dialect: "postgres",
    },
};
//# sourceMappingURL=config.js.map