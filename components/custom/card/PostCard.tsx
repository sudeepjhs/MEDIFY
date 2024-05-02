import { Post } from "@/config/types"
import { Card, CardBody, CardHeader, Divider, Image, User } from "@nextui-org/react"
import { FC } from "react"



const PostCard: FC<{ postData: Post, className?: string }> = ({ postData, className }) => {
    return (
        <Card radius="lg" className={"border-none " + className}>
            <CardHeader className="p-0">
                <Image
                    removeWrapper
                    alt="post image"
                    src={postData.postImageUrl}
                    className="object-cover"
                    width={400}
                />
            </CardHeader>
            <CardBody className="space-y-3">
                <div className="flex h-5 text-default-600 items-center space-x-2 font-medium">
                    <div>{postData.category}</div>
                    <Divider orientation="vertical" />
                    <div>{postData.datetime}</div>
                </div>
                <div className="text-primary-800 font-medium text-lg">
                    <p>{postData.title}</p>
                </div>
                <div>
                    <User name={postData.user.username} className="text-primary-800 font-medium" avatarProps={{
                        src: postData.user.profileImg
                    }} />
                </div>
            </CardBody>
        </Card>
    )
}

export default PostCard