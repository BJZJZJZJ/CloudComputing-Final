import AWS from "aws-sdk";

const config = {
  region: "us-east-1",
  accessKeyId: "ASIAWVW2BDF4KYKGWKKC",
  secretAccessKey: "OAFywnhGAUID2YngXPGPRQCRyqiZbtnyCDlSAY1o",
  sessionToken:
    "FwoGZXIvYXdzELX//////////wEaDIeRVtfxwKBKsg1W1SLFAbH0qsA3CthytUV++Jp73OID7NilcUmf9LrILr+q77e8b/ZeuZsXM/TvMdfbXhaf3x3MmezoHqCh51R5A77m7eOGyqk72GNFSthsQiafDQtRPgNZCuFNKazslYKGiaR0tZrmV3pIfk6ehDRPuK7X7umYrPjrMDjwWZlhIdQsftx/g9lJAoA60gvs6Ha0tonLbtnWXi/upcuY4Cs5sRPwtp32EGOYU3Mhz15eQufGyuYsOyQpV2TQem3K0KxbddRtRrjGIgMjKPbyu/4FMi1kRDi+iC7ZlK0SHsMNn2HLXYvZxpd+HF8mfSpCMZFiwhRkMMeTlZGYHKsc17o=",
};

AWS.config.update(config);

export { AWS };
