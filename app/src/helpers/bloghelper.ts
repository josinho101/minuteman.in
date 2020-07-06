import BlogDataLayer from "./blogdatalayer";

class BlogHelper {

    public static getAllBlogs = () => {
        let blogs = BlogDataLayer.getAll();

        if (blogs && blogs.length) {
            return blogs.filter(i => i.enabled);
        }

        return [];
    }
}

export default BlogHelper;