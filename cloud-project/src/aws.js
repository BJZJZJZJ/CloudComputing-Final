import AWS from "aws-sdk";

const config = {
  region: "us-east-1",
  accessKeyId: "ASIAWVW2BDF4OMW2VWU2",
  secretAccessKey: "fe54MQHx9U3NVaRt10I5Njtu57KTOAd+f/GRJkpG",
  sessionToken:
    "FwoGZXIvYXdzEBQaDP13e+5XX1+NbsuLDyLFAUYxg2hBY6ZW7yXkuncpYKHfRNcajCN3U8K1XeSBVr+rnSdN0QS/ZF2ZN5p+KjZIrcaGUYDr7SWOM3HDLMv1F65cLQ8oe9Y3wP5Zahv0S8fD9JJKI9t28pUzoWD3vRETHFMY6afqcOwK8VRhYKq5GGEcM5db064kN4Z6Y6WxF6cgDAxwHNMJtlRuNswIzPwK0dd21RRoJuPAKlxtAXeIJBood0IpKqMIkJf1fz+Ec1FWSf+8YZXXJAj+/1yP1LN2giYbyEVIKIXBmP4FMi2SyjS1zVwJNn9A5bET4CKrnVXBihDFp0UKoGBlpHLNZ6AipVBOrJUrsad4dZ4=",
};

AWS.config.update(config);

export { AWS };
