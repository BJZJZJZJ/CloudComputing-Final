import AWS from "aws-sdk";

const config = {
  region: "us-east-1",
  accessKeyId: "ASIAWVW2BDF4FNFKEUU6",
  secretAccessKey: "dnugvqz1vCd3AIOo0EL63WS42w1Gt+/z/5mbTJJ4",
  sessionToken:
    "FwoGZXIvYXdzECgaDP9gQMDVr9ojg70QMiLFAcqlj7mGJDMQZLTKPjp9QLV4zvnfU8Anqk4SFrF/23F6N4qg/uIz0JeSEtGU8W/jwQPDumMC/JjrVBAqdnlH8i3TWPmwFKirPtM+C2HXAOf0qwroSxDCFJ9PMSF6sxITxLIFE0aeMH/bWctKQ7kmTmAPzvko6aKvEfY4RovwUgo5aH+34YLEk/rsRmYJrE8vXWA+EuqizO+Yrdi7JKB59VjwX6xA54tDpxIiQ9nqUCGKXQqCsjLF3yiRExwBWCcu8Tnc6BtvKPTwnP4FMi3ngsaBp0z6/6Kak3P2XZXdaHJqKnkJaNZPde3IwZsktDEMWffII2bQoAAoMp4=",
};

AWS.config.update(config);

export { AWS };
