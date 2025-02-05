exports.PORT = 18082;

exports.GOOGLE_CLIENT_ID = "clientid";

exports.AWS_ACCESS_KEY_ID = "";
exports.AWS_SECRET_ACCESS_KEY = "";

// TODO: way to tweak middleware options for local destinations
exports.UPLOAD_DESTINATION = "S3";

exports.FINE_UPLOADER_CONFIG = {
  aws: {
    access_key_id: exports.AWS_ACCESS_KEY_ID,
    region: "eu-west-1",
    s3_bucket: "sm-engine-upload",
    s3_endpoint_url: "",
    s3_signature_endpoint: "/upload/s3/sign",
    s3_signature_version: 2
  },
  storage: "s3"
}
