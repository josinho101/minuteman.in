import Blog from "../components/blog/typings/blog";

// json blog data import
import theGenesis from "../posts/the-genesis.json";
import deployReactToGhPages from "../posts/deploy-react-app-to-gh-pages.json";

class BlogDataLayer {
  /**
   * return all blogs
   */
  public static getAll = (): Blog[] => {
    let data = [theGenesis, deployReactToGhPages];

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
