"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPutSignedUrl = exports.getGetSignedUrl = exports.s3 = void 0;
const AWS = require("aws-sdk");
const config_1 = require("./config/config");
//Configure AWS
if (config_1.config.aws.aws_profile !== "DEPLOYED") {
    var credentials = new AWS.SharedIniFileCredentials({
        profile: config_1.config.aws.aws_profile,
    });
    AWS.config.credentials = credentials;
}
exports.s3 = new AWS.S3({
    signatureVersion: "v4",
    region: config_1.config.aws.aws_region,
    params: { Bucket: config_1.config.aws.aws_media_bucket },
});
/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
function getGetSignedUrl(key) {
    const signedUrlExpireSeconds = 60 * 5;
    const url = exports.s3.getSignedUrl("getObject", {
        Bucket: config_1.config.aws.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds,
    });
    return url;
}
exports.getGetSignedUrl = getGetSignedUrl;
/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
function getPutSignedUrl(key) {
    const signedUrlExpireSeconds = 60 * 5;
    const url = exports.s3.getSignedUrl("putObject", {
        Bucket: config_1.config.aws.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds,
    });
    return url;
}
exports.getPutSignedUrl = getPutSignedUrl;
