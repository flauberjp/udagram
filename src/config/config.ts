export const config = {
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
    aws_media_bucket: "udagram-flauberjp-dev",
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
