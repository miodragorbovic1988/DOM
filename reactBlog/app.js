
const App = (props) => {
    return (
        <div>
            <Header />
            <PostSection posts={ourPosts} />
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <h1>My React Blog</h1>
        </div>
    )
}

const Post = (props) => (
    <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>
);

const PostSection = (props) => {
    const singleElement = props.posts.map((singleBlogElement) => {
        const { props }

        return <div>
            <h1>{props.singleElement.title}</h1>
            <p> {props.singleElement.body}</p>
        </div>

    })
    return (
        <div>
            <Post title={props.posts[0].title} description={props.posts[0].body} />
            <Post title={props.posts[1].title} description={props.posts[1].body} />
        </div>
    )
}


ReactDOM.render(<App podaci={ourPosts} />, document.querySelector('.root'));
