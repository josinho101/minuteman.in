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

        return data.map((item) => {
            return BlogDataLayer.MapToBlog(item);
        });
    }

    /**
     * map data to blog
     */
    private static MapToBlog = (data: any): Blog => {
        let blog: Blog = JSON.parse(JSON.stringify(data));
        return blog;
    }
}

export default BlogDataLayer;