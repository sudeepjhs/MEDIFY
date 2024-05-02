import { FC } from "react"
import { title } from "../primitives"
import PostCard, { Post } from "../custom/card/PostCard"

const postList: Array<Post> = [
    {
        category: "Medical",
        datetime: "March 31, 2022",
        postImageUrl: "/images/posts/post-1.png",
        title: "6 Tips To Protect Your Mental Health When You’re Sick",
        user: {
            username: "Ahmad Lee",
            profileImg: "/images/doctors/doctor-avator.png"
        }
    },
    {
        category: "Medical",
        datetime: "March 31, 2022",
        postImageUrl: "/images/posts/post-1.png",
        title: "6 Tips To Protect Your Mental Health When You’re Sick",
        user: {
            username: "Ahmad Lee",
            profileImg: "/images/doctors/doctor-avator.png"
        }
    },
    {
        category: "Medical",
        datetime: "March 31, 2022",
        postImageUrl: "/images/posts/post-1.png",
        title: "6 Tips To Protect Your Mental Health When You’re Sick",
        user: {
            username: "Ahmad Lee",
            profileImg: "/images/doctors/doctor-avator.png"
        }
    }
]

const BlogNews: FC = () => {
    return (
        <section className="flex flex-col justify-center py-10 text-center">
            <h6 className="text-primary">Blog & News</h6>
            <h2 className={title({ color: "blue" })}>Read Our Latest News</h2>
            <div className="flex justify-evenly mt-6">
                {postList.map((post, i) => <PostCard key={"post-" + i} postData={post} className="md:max-w-96" />)}
            </div>
        </section>
    )
}

export default BlogNews