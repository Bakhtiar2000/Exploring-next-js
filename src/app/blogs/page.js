// 'use client'

import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'My first next app',
}

const blogs = [
    {
        id: 1,
        year: 2016,
        title: "title_1"
    },
    {
        id: 2,
        year: 2017,
        title: "title_2"
    },
    {
        id: 3,
        year: 2018,
        title: "title_3"
    },
    {
        id: 4,
        year: 2019,
        title: "title_4"
    }
]
const BlogsPage = () => {
    // const router= useRouter()
    return (
        <div className='container mx-auto'>
            {
                blogs.map(({ id, year, title }) => <Link
                    className='border border-blue-500 hover:bg-blue-200 block p-2 my-2'
                    key={id}
                    href={{
                        pathname: `/blogs/${year}/${id}`,
                        query:{
                            title: title,
                        }
                    }}
                    // onClick={()=> router.push(`/blogs/${year}/${id}?title=${title}`)}
                >
                    {title}
                </Link>)
            }
        </div>
    );
};

export default BlogsPage;