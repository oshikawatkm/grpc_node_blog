// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_post_pb = require('../protos/post_pb.js');

function serialize_post_ListPostRequest(arg) {
  if (!(arg instanceof protos_post_pb.ListPostRequest)) {
    throw new Error('Expected argument of type post.ListPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_ListPostRequest(buffer_arg) {
  return protos_post_pb.ListPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_ListPostResponse(arg) {
  if (!(arg instanceof protos_post_pb.ListPostResponse)) {
    throw new Error('Expected argument of type post.ListPostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_ListPostResponse(buffer_arg) {
  return protos_post_pb.ListPostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_showPostRequest(arg) {
  if (!(arg instanceof protos_post_pb.showPostRequest)) {
    throw new Error('Expected argument of type post.showPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_showPostRequest(buffer_arg) {
  return protos_post_pb.showPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_showPostResponse(arg) {
  if (!(arg instanceof protos_post_pb.showPostResponse)) {
    throw new Error('Expected argument of type post.showPostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_showPostResponse(buffer_arg) {
  return protos_post_pb.showPostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostServiceService = exports.PostServiceService = {
  listPost: {
    path: '/post.PostService/ListPost',
    requestStream: false,
    responseStream: false,
    requestType: protos_post_pb.ListPostRequest,
    responseType: protos_post_pb.ListPostResponse,
    requestSerialize: serialize_post_ListPostRequest,
    requestDeserialize: deserialize_post_ListPostRequest,
    responseSerialize: serialize_post_ListPostResponse,
    responseDeserialize: deserialize_post_ListPostResponse,
  },
  showPost: {
    path: '/post.PostService/ShowPost',
    requestStream: false,
    responseStream: false,
    requestType: protos_post_pb.showPostRequest,
    responseType: protos_post_pb.showPostResponse,
    requestSerialize: serialize_post_showPostRequest,
    requestDeserialize: deserialize_post_showPostRequest,
    responseSerialize: serialize_post_showPostResponse,
    responseDeserialize: deserialize_post_showPostResponse,
  },
};

exports.PostServiceClient = grpc.makeGenericClientConstructor(PostServiceService);
