
  var path = require('path');
  exports.createPages = async ({actions,graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
     {
      allContentfulBlogPost {
        nodes {
          date(formatString: "DD MMMM, YYYY")
          title
          slug
          image {
            fluid {
              src
            }
            description
          }
          content {
            json
          }
        }
      }
    }
    `)
    console.log(JSON.stringify(result));
    
    result.data.allContentfulBlogPost.nodes.forEach((obj)=>{
      createPage({
        path: `/blog/${obj.slug}`,
        component: path.resolve('./src/templates/blog-post.tsx'),
        context: {
          blogDetails: obj
        }
      })
    })
  }

  exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    
    if (page.path.match(/^\/404/)) {

      page.matchPath = "/404/*"
  
      
      createPage(page)
    }
  }