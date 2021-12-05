import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";



function Feed({ posts }) {
    return (
        <div className="flex-grow h-screen p-44 pt-6 mr-4
        xl:mr-40 overflow-y-auto scollbar-hide scrollbar-hide">
          <div className="mx-auto max-w-md md:max-w-lg" >
              <Stories/>
              <InputBox/>
              <Posts posts={posts}/>
          </div>
        </div>
    )
}

export default Feed
