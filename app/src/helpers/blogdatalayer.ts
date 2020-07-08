import Blog from "../components/blog/typings/blog";

// json blog data import
import blog1Data from "../posts/post-1.json";
import blog2Data from "../posts/post-2.json";
import blog3Data from "../posts/post-3.json";

class BlogDataLayer {
  /**
   * return all blogs
   */
  public static getAll = (): Blog[] => {
    let data = [blog1Data, blog2Data, blog3Data];

    let blogs = data.map((item) => {
      return BlogDataLayer.MapToBlog(item);
    });

    blogs = BlogDataLayer.sortByDate(blogs);

    return blogs;
  };

  private static sortByDate(blogs: Blog[]) {
    return blogs.sort((a: Blog, b: Blog) => {
      let date1 = Date.parse(a.publishedAt);
      let date2 = Date.parse(b.publishedAt);
      return date2 - date1;
    });
  }

  /**
   * map data to blog
   */
  private static MapToBlog = (data: any): Blog => {
    let blog: Blog = JSON.parse(JSON.stringify(data));
    return blog;
  };
}

export default BlogDataLayer;
