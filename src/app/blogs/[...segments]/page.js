'use client'

import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({params, searchParams}) => {
    console.log(params) //{ segments: [ '2023', '66' ] }
    console.log(params.segments) //[ '2023', '66' ]
    const [year, id]= params.segments || [] // year= 2023, id= 66 || []

    const params2= useParams()
    const searchParams2= useSearchParams()

    console.log(params2.segments.split("/"), searchParams2.get("title"))
    return (
        
        <div>
            SingleBlog of {id || 'unavailable'} in {year || new Date().getFullYear()}
            <br />
            {
                searchParams.title
            }
        </div>
    );
};

export default SingleBlog;