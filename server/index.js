const path = requrie('path');
const dotenv = require('dotenv');

const posts = requrie('../server/protos/post_pb');
const postService = requrire('../server/protos/post_grpc_pb');

const grpc = require('grpc');
const Post = require('./models').blogs;

dotenv.config({ path: './config/config.env' })

function listBlog(call, callback) {
  console.log('Received list post request');
  Post.findAll()
    .then(data => {
      data.forEach(element => {
        let post = new post.Post()
        post.setId(element.id)
        post.setTitle(element.title)
        post.setContent(element.content)
        post.setUserId(element.user_id)

        console.log('Posts ', post.toString)

        let postResponse = new posts.ListPostResponse()
        postResponse.setPost(post)

        call.write(postResponse)
      })
      call.end()
    })
}

async function readPost(call, callback) {
  console.log('Receive Post request');

  let postId = call.request.getPostId()

  await Post.findOne({
    where: {
      id: parseInt(postId)
    }
  }).then(data => {
    console.log("Serching for a post...")

    if (data.length) {
      let post = new posts.ReadPostResponse()

      console.log("Blog found and sending message")

      post.setId(postId)
      post.setTitle(data[0].title)
      post.setContent(data[0].content)
      post.setUserId(data[0].user_id)

      let postResponse = new posts.ReadPostResponse()
      postResponse.setPost(post)

      callback(null, postResponse)
    } else {
      console.log("Post not found")
      return ({
        code: grpc.status.NOT_FOUND,
        message: "Post Not Found..."
      })
    }
  })
}

function main() {
  let server = new grpc.Server()
  server.addService(postService.postServiceService, {
    // listBlog: listBlog,
    // createBlog: createBlog,
    showPost: showPost
  })

  server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())

  server.start()

  console.log('Server running on port 127.0.0.1:50051')
}

main()