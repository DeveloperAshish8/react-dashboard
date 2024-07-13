import { EyeOff, Trash, Eye } from "lucide-react";
import React, { useState } from "react";
import KPIBox from "../components/KPIBox";

const PostList = () => {
  // Dummy data for posts
  const postData = [
    {
      post_id: 1,
      post_caption: "Hello World",
      media_url: "http://example.com/image.jpg",
    },
    // Add more dummy posts here
  ];

  const [hide, setHide] = useState(true);
  const [posts, setPosts] = useState(postData);

  // delete function
  const deletePost = (post_id) => {
    const updatedPost = posts.filter((post) => post.post_id !== post_id);
    setPosts(updatedPost);
  };

  return (
    <div className="md:p-4 p-1">
      <h1 className="text-2xl font-bold mb-4">Posts Listing</h1>
      <div className="flex gap-6 flex-wrap my-6">
        <KPIBox heading="Total Posts:" data="1000" profit="+10" />
        <KPIBox heading="Posts (24h):" data="150" profit="-34" />
      </div>

      {/* Table Section starts */}
      <div className=" overflow-x-auto sm:mx-0  -mx-8 ">
        <table className="w-full table-auto sm:shadow-lg my-5 bg-white">
          <thead className="text-white">
            <tr className=" bg-teal-400  rounded-xl mb-2 ">
              <th className="p-3 text-left">Post ID</th>
              <th className="p-3 text-left">Caption</th>
              <th className="p-3 text-left">Media URL</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {posts.map((post) => (
              <tr key={post.post_id}>
                <td className="py-2 px-4 border-b">{post.post_id}</td>
                <td className="py-2 px-4 border-b">{post.post_caption}</td>
                <td className="py-2 px-4 border-b">{post.media_url}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-red-500 mx-1 w-8 h-8"
                    onClick={() => deletePost(post.post_id)}
                  >
                    <Trash />
                  </button>
                  <button
                    className="text-blue-500 mx-1 w-8 h-8"
                    onClick={() => setHide(!hide)}
                  >
                    {hide ? <EyeOff /> : <Eye />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table Section ends */}
    </div>
  );
};

export default PostList;
